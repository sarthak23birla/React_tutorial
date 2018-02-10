import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter , Route } from 'react-router-dom'
//Components
import Home from './components/home'
import Artist from './components/artist'

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path ="/artists/:id" component={Artist}/>
            </div>
        </BrowserRouter>
    )
}
ReactDom.render(<App/>,document.getElementById('root'))