import React from 'react'
import {Link} from 'react-router-dom'
const ArtistsList = (props) => {
    
    const list = ({allArtist}) => {
        if(allArtist){
            return allArtist.map((item)=> {
                const styles ={
                    background:`url('/images/covers/${item.cover}.jpg') no-repeat`
                }
                return(
                    <Link key={item.id} to={`/artists/${item.id}`} 
                    className="artist_item" style={styles}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }
    }
    return(
        <div className ="artists_list">
            <h4>Browse the Artists</h4>
            {list(props)}
        </div>
    )
}
export default ArtistsList