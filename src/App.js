import './App.css';
import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth ,createUserProfileDocument} from './firebase/firebase.utils';
import {connect }from 'react-redux';
import {setCurrentUser} from './redux/user/user.actons';


class App extends Component {
  // constructor(){
  //   super();

  //   this.state= {
  //     currentUser : null
  //   }
  // }
  unsubscribeFromAuth = null;
  componentDidMount(){

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser : user });
        // createUserProfileDocument(user);
      // console.log(user);

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());

         setCurrentUser ({
            id:snapShot.id,
            ...snapShot.data(),
          })
        }
        );
       
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {

    return (
      <div className='app'>
      <Header/>
      {/* <Header currentUser={this.state.currentUser}/> */}
      <Switch> 
      <Route exact path= '/' component={HomePage}></Route>
      <Route path= '/shop' component={ShopPage}></Route>
      <Route exact path= '/signIn' render={() => this.props.currentUser ? (<Redirect to= '/' />) : <SignInAndSignUp/>}></Route>
  </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser

})
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
