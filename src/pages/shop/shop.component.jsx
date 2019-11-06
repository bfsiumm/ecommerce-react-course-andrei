import React from 'react';
import {  Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import './shop.styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {

    state = { isLoading: true };
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        // solution 1
        collectionRef.get().then(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collectionMap);
            this.setState({isLoading: false})
        })

        // the above solution and the below one are similar, with the following exceptions:
        //the above one uses promises pattern, where the below one user observable( that how firebase at least works, but it's possible to use promise approach too)
        // the above sollution differ from the below one that: we will only get new data once our component mount where in at the solution below, everytime there is a data chages we will
        // get the new one beacause of the observable approach: onSnapshot
        /**** it's also possible to use firebase with the fetch api: in firebase documentation there is an endpoint that we can call to get the data */
        
        // solution 2
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
        //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //     this.props.updateCollections(collectionMap);
        //     this.setState({isLoading: false})
        // });
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={match.path} render={props => (<CollectionOverviewWithSpinner isLoading={isLoading} {...props} />) }/>
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={isLoading} {...props}/>) }/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(Shop);