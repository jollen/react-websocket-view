import React from 'react';
import { render } from 'react-dom';
import { WebsocketView } from './Components/WebsocketView';

render(
    <WebsocketView 
    	server="wss://wot.city/object/testman/viewer">
    	<p onMessage={function(data) {console.log(data)}}></p>
    </WebsocketView>,
    document.getElementById('content')
);
