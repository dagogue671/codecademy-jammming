import React from 'react';

import styles from './Track.module.css';

export default function Track(props)


{
    return (
        <div>
            <h2>{props.track.artistName}</h2>
            <p>{props.track.trackName}</p>
            <p>{props.track.albumName}</p>        
        </div>
    );
    


}