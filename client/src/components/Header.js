import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'
import M from "materialize-css/dist/js/materialize.min.js";

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return ;
            case false:
                return (
                    <li><a href="/auth/google" >Log In With Google</a></li>
                );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render() {
        return (
            <nav className="light-green darken-2">
                <div className="nav-wrapper" >
                <Link 
                to={this.props.auth ? '/surveys' : '/'} 
                className=" left brand-logo" style={{ marginLeft: 10 }}><i class="material-icons hide-on-med-and-down">event_note</i>Notely</Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right ">
                    {this.renderContent()}
                    
                </ul>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    {this.renderContent()}
                </ul>
            </nav>
        );
    }
}


function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);