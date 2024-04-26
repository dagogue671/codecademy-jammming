import React, {useState} from 'react';
import TrackList from '../TrackList/TrackList';

//Use as reference: https://qapush-jammming.netlify.app/


//Temp CSS Sytling
const bodyStyle = {
    backgroundImage: "URL(\"https://th.bing.com/th/id/R.6e07ade0cfe8ec9f84fd2d4b3fa7fe60?rik=2YdckAIhWQNI4A&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fGradient-Wallpaper.jpg&ehk=aXakOAAAovnrzJ1frfiWztc2mJlLV4z2kh2S9%2bmhniI%3d&risl=&pid=ImgRaw&r=0\")"
}

function App(){
    

    return (
        <body style={bodyStyle}>
            <TrackList />
        </body>
        
    )

}

export default App;