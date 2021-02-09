import './App.css';
import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth ,createUserProfileDocument} from './firebase/firebase.utils';


class App extends Component {
  constructor(){
    super();

    this.state= {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser : user });
        // createUserProfileDocument(user);
      // console.log(user);

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());

          this.setState({ currentUser: {
            id:snapShot.id,
            ...snapShot.data(),
          }
        }, () => {
          console.log(this.state);
        })
        });
       
      }
      this.setState({currentUser:userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {

    return (
      <div className='app'>
      <Header currentUser={this.state.currentUser}/>
      <Switch> 
      <Route exact path= '/' component={HomePage}></Route>
      <Route path= '/shop' component={ShopPage}></Route>
      <Route path= '/signIn' component={SignInAndSignUp}></Route>
  </Switch>
      </div>
    );
  }
  
}

export default App;
