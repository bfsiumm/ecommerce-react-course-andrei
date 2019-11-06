import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {  createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector'
import { setCurrentUser } from './redux/user/user.actions';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

import HomePage from "./pages/homepage/homepage.component";
import Shop from './pages/shop/shop.component';
import SinginAndSignUp from './pages/signin-and-signup/signin-and-signup.component';
import Checkout from './pages/checkout/checkout.component';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapshot => {
          setCurrentUser({id: snapshot.id, ...snapshot.data()} );
        })
      } else {
        setCurrentUser(userAuth);
      }
    });

    // used just to populate programatically the firebase database with data: we just need to execute this once
    // here i'm just keeping it for reference
    //addCollectionAndDocuments('collections', collectionsArray.map(({ title, items}) => ({title, items}) ) );
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path='/checkout' component={Checkout}/>
          <Route  path='/signin' render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SinginAndSignUp />
              )
            } />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
