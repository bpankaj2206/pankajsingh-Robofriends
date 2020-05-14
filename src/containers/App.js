import React,{Component} from 'react';
import Cardlist from '../component/Cardlist';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';
import {robots }from '../robots';
import './App.css'

class App extends Component{
    constructor(){ super()
        this.state={
            robots:[],
            searchfeild:''
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}))

}

    onSearchChange=(event)=>{
     this.setState({searchfeild:event.target.value})
    }
 render(){
     const {robots,searchfeild}=this.state;
       const filteredRobots=robots.filter(robots=>{
           return robots.name.toLowerCase().includes(searchfeild.toLowerCase())  ;     })
  if(robots.length===0){
    return <h1>LOADING</h1>
  }
else
   { return(
     <div className='tc'>  
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
          <ErrorBoundry>
        <Cardlist robots={filteredRobots}/>
        </ErrorBoundry>
        </Scroll>
        </div> 
    );}}
}
export default App;