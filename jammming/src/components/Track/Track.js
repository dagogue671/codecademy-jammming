import React from 'react';

//Temp CSS Styling


const cardContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 0,
    padding: 5,
    width: 300,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    border: "1px solid #555"
}

const trackLabel = { 
   width: 150,
   height: "100%",
   //margin: 0,
   //padding: 0,
   //border: "5px solid #555",
}

const trackTitle = {
    marginTop:0,
}

const trackAlbum = {
    marginTop: 0,
    border: "5px solid #555",
}


const imageSize = {
    width: 75,
    height: 75,
    objectFit: "cover",
    border: "5px solid #555",
    borderRadius: 12

}



function Track({ name, artist, album, imageSrc}){
   

    return (
        <div style={cardContainer}>
            <img src={imageSrc} style={imageSize}/>
            <div style={trackLabel}>
                <h3 style={trackTitle}>{name}</h3>
                <p>{artist}</p>
                <p>{album}</p>
            </div>
            <div>
                <button>+</button>
            </div>
        </div>
    );
}

export default Track;