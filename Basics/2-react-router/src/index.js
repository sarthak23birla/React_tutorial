import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Link,Switch,NavLink } from 'react-router-dom';
//Components
import Posts from './components/posts'
import Profile from './components/profile'
import PostsItem from './components/posts_item'
import NotFound from './components/404'
class App extends Component{
    render(){
        return <div>Home</div>
    }
}
ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <NavLink exact to="/" activeStyle={{color:'red'}} activaClassName="selected"> Home</NavLink> <br/>
                <NavLink to="/posts" activeStyle={{color:'red'}} activeClassName="selected">Post</NavLink><br/>
                <NavLink to="/profile" activeStyle={{color:'red'}} activeClassName="selected" >Profile</NavLink><br/>
            </header>
            <hr/>
            <Switch>
                <Route path= "/posts/:id" component={PostsItem}></Route>
                <Route path="/profile" component={Profile} ></Route>
                <Route exact path="/posts" component={Posts} ></Route>
                <Route exact path="/" component={App}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
    ,document.querySelector("#root"))