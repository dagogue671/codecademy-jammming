import React from 'react';
import Track from '../Track/Track';



export default function TrackList(props) {

   return(
    <div>
        {props.tracks.map(track => {
            return <Track track={track} />
        })}
    </div>
   )
}
