import React,{ Component } from 'react'
import Banner from './banner'
import ArtistsList from './artists_list'

const URL_ARTISTS = "http://localhost:3004/artists"

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            artists:''
        }
    }
 
    componentDidMount(){
        fetch(URL_ARTISTS,{
            method:'GET'
        })
        .then(response=> response.json())
        .then(json=>{
            this.setState({
                artists:json
            })
        })
    }
    
    render(){
        return(
            <div>
                <Banner/>
                <ArtistsList allArtist={this.state.artists}/>
            </div>
        )
    }

}
export default Home;