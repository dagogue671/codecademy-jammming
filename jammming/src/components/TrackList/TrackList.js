import React, {useState} from 'react';
import Track from '../Track/Track';

const testObject1 =   [{
    name: "Testing 1",
    artist: "Artist 1",
    album: "Album 1",
    imageSrc: "https://th.bing.com/th/id/OIP.XVhAOpVKZTdo2WKZijRDUQHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7"
},
{
    name: "Testing 2",
    artist: "Artist 2",
    album: "Album 2",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSXJVP59mQEczhXNf0mnr8f7VUUbhgsREgoUBf0r-TnBYt7JCjaHhCtxNePedB_RgclI&usqp=CAU"
},
{
    name: "Testing 3",
    artist: "Artist 3",
    album: "Album 3",
    imageSrc: "https://static1.srcdn.com/wordpress/wp-content/uploads/2018/07/Fallout-Vault-Boy-Thumbs-Up.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
}
];



function TrackList() {

    const [testObjects, setTestObjects] = useState(testObject1);


    return (
        <div>
            { testObjects.map(track => {
           return (
            <Track 
            name={track.name}
            artist={track.artist}
            album={track.album}
            imageSrc={track.imageSrc}
            />
           )
        })}
        </div>
    )
}

export default TrackList;