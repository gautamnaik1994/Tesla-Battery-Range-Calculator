import React, { Component } from 'react';
import '../styles/app.scss';

import Header from 'Header';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <Header/>
            </div>
        );
    }
}

export default App;
