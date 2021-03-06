
A React polyfill that enables elements' Websocket

## Install

To setup the package.

```
npm install react-websocket-view --save
```

## Usage

1. Import ```WebsocketView``` from ```react-websocket-view```

2. Use ```<WebsocketView />``` as the parent component, and put Websocket server URI to ```server``` props.

3. Add ```onMessage``` callback to your elements.

## Quickstart

The following sample connects to ```wss://wot.city/object/testman/viewer```, and ```<p>``` will receive real-time data with ```onMessage``` callback.

```
import React from 'react';
import { render } from 'react-dom';
import { WebsocketView } from 'react-websocket-view';

render(
    <WebsocketView 
    	server="wss://wot.city/object/testman/viewer">
    	<p onMessage={function(data) {console.log(data)}}></p>
    </WebsocketView>,
    document.getElementById('content')
);
```

## Examples

* Two ```<p>``` elements receive real-time data from the same server.

```
<WebsocketView 
  server="wss://wot.city/object/testman/viewer">
  <p onMessage={function(data) {console.log(data)}}></p>
  <p onMessage={function(data) {console.log(data)}}></p>
</WebsocketView>
```

* Two ```<p>``` elements receive real-time data from different servers.

```
<div>
  <WebsocketView 
    server="wss://wot.city/object/room1/viewer">
    <p onMessage={function(data) {console.log(data)}}></p>
  </WebsocketView>
  <WebsocketView 
    server="wss://wot.city/object/room2/viewer">
    <p onMessage={function(data) {console.log(data)}}></p>
  </WebsocketView>
</div>
```

## License

The [MIT License](http://www.opensource.org/licenses/MIT) (MIT). See [LICENSE.md](LICENSE.md).
