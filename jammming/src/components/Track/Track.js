import React from 'react';

const imageSize = {
    width: 150,
    height: 150
}

function Track({name, artist, album, id, imageSrc}){
   

    return (
        <ul>
            <li>
            <img src={imageSrc} style={imageSize}/>
            <h3>{name}</h3>
            <p>{artist} {album}</p>
            </li>
        </ul>
    );
}

export default Track;