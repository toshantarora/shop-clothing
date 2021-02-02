import './App.css';
import {Switch, Route ,Link} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';



//Examples

// const HomePages = props => {
//   console.log(props)
//   return(
//   <div> 
//   <button onClick={() => props.history.push('/topics')}>Topics</button>
//   <Link to='/topics'>Topics</Link><h1>Homepage</h1> </div>
//   )
//   }
// const TopicsList = (props) =>{
//   console.log(props)
//   return(
//     <div>
//     <Link to="/">Back To Homepage</Link>
//       <h1> TopicsList Page</h1>
//       <Link to= {`${props.match.url}/13`}></Link>
//       <Link to= {`${props.match.url}/14`}></Link>
//       <Link to= {`${props.match.url}/15`}></Link>
//     </div>
//   )
// }

// const TopicDetail = (props) => {
//   console.log(props);
//  return (
//     <div><h1>Topic Detail Page {props.match.params.topicId}</h1></div>
//   )
// }

function App() {
  return (
    <div className='app'>
    <Switch> 
    <Route exact path= '/' component={HomePage}></Route>
    <Route path= '/shop' component={ShopPage}></Route>
</Switch>

    {/* example */}
    
   {/*     
    <Route exact path='/' component={HomePages}></Route>
    <Route exact path= '/topics' component={TopicsList}></Route>
    <Route path= '/topics/:topicId' component={TopicDetail}></Route> */}
    </div>
  );
}

export default App;
