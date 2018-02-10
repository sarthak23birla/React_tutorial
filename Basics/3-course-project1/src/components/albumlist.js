import React from 'react'

const AlbumList = (props) => {
    
    const showList = (props) => {
        if(props.albumlist){
            return (props.albumlist).map((item,index)=> {
                    return(
                            <img key={index} src ={`/images/albums/${item.cover}.jpg`} alt=""/>
                    )
                } 
            )
        }
    }
    
    return(
        console.log(),
        <div className="album_list">    
            {showList(props)}
        </div>
    )
}
export default AlbumList