import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, HashRouter, Link, IndexRoute } from 'react-router-dom'
import { Route, HashRouter, Link } from './react-router/index'
import Home from './Home'
import Cart from './Cart'
import User from './User'

class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/cart">cart</Link></li>
                    <li><Link to="/user">user</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <HashRouter>
        <App>
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/cart" component={Cart} />
        </App>
    </HashRouter>, document.getElementById('root'));
