console.log('app component')
import React from 'react'
import ProductVideo from 'react-video-js';

export default class App extends React.Component {
    render = () => {
        <ProductVideo
            ref={i => this.pv = i}
            source="https://dl.dropboxusercontent.com/u/8725581/99B170E9-5D1C-49C5-A87F-1123679F3618.MOV"
            />
    }
}
