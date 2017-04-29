import React from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom';
import App from 'app';

// import TestComponent from 'testcomponent';
// import TestComponent2 from 'testcomponent2';

export default () => (
        <Router>
                <div>

                        <Route exact path="/" component={App} />




                </div>
        </Router>
)
