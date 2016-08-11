import React, { Component } from 'react';
import AppStore from '../Stores/AppStore';
import { AppActions } from '../Actions/AppActions';

export class WebsocketView extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: {}
        };

        this.onMessage = this.onMessage.bind(this);

        AppActions.connect(this.props.server);
    }

    componentDidMount() {
        AppStore.addMessageListener(this.onMessage);

        let children = [];

        // Has only one child
        if (typeof this.props.children.length === 'undefined') {
            children.push(this.props.children);
        // Has many children
        } else {
            children = this.props.children;
        }

        // Register child components to store
        for (let child in children) { 
            if (children.hasOwnProperty(child)) {
                if (typeof children[child].props.onMessage === 'function') {
                    AppStore.addMessageListener(children[child].props.onMessage);
                }
            }
        }
    }

    componentWillUnmount() {
        AppStore.removeMessageListener(this.onMessage); 

        let children = [];

        // Has only one child
        if (typeof this.props.children.length === 'undefined') {
            children.push(this.props.children);
        // Has many children
        } else {
            children = this.props.children;
        }

        // Register child components to store
        for (let child in children) { 
            if (children.hasOwnProperty(child)) {
                if (typeof children[child].props.onMessage === 'function') {
                    AppStore.removeMessageListener(children[child].props.onMessage);
                }
            }
        }               
    }

    onMessage(item) {
        this.setState({
            data: item
        });        
    }

    render() {
        return (
            <div id="websocketView">
            </div>
        );
    }
}

WebsocketView.defaultProps = {
}
