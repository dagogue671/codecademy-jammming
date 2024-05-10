import React, {useState} from 'react';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';

//Use as reference: https://qapush-jammming.netlify.app/


//Temp CSS Sytling
const bodyStyle = {
    backgroundImage: "URL(\"https://th.bing.com/th/id/R.6e07ade0cfe8ec9f84fd2d4b3fa7fe60?rik=2YdckAIhWQNI4A&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fGradient-Wallpaper.jpg&ehk=aXakOAAAovnrzJ1frfiWztc2mJlLV4z2kh2S9%2bmhniI%3d&risl=&pid=ImgRaw&r=0\")"
}

const testTracks = [
    {
        id:1,
        trackName: 'We Built this city',
        artistName: 'Starship',
        albumName: 'Not Sure',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-ax79F7ROheAiSo5ez0vKCHjhpkDjCeFlkNtc9VGwg&s'

    },
    {
        id:2,
        trackName: 'Oops I did it again',
        artistName: 'Britney Spurrs',
        albumName: 'You got me',
        imageSrc: 'https://i.scdn.co/image/ab67616d0000b2732aa20611c7fb964a74ab01a6'
    },
    {
        id:3,
        trackName: 'You belong with me',
        artistName: 'Tay Swizle',
        albumName: 'Dont Know',
        imageSrc: 'https://i.scdn.co/image/ab67616d0000b2737b25c072237f29ee50025fdc' 
    }
]


function App(){
    

    return (
       <div>
         <Playlist tracks={testTracks} />
       </div>
        
    )

}

export default App;