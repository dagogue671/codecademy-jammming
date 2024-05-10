import React, {useState} from 'react';
import TrackList from '../TrackList/TrackList'



export default function Playlist(props) {

    return(

        <>
            <h2>Playlist</h2>
            <TrackList tracks={props.tracks} />
        </>
    );
}