import React,{ Component } from 'react';


class Header extends Component {
    /// react provides

    render(){
        
        return (
            <header>
                <div className="logo"
                onClick = {()=> console.log('clicked')}
                >Logo</div>
                <input/>
            </header>
        )
    }

}

export default Header;