import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import { autofill } from 'redux-form';


var sectionStyle = {
    width: "100%",
    height: "auto",
    backgroundImage: `url(https://i.imgur.com/slu0z1B.jpg)`,
    backgroundPosition: "center center",
	backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
                <BrowserRouter>
                    <div className="container"  style={ sectionStyle }>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);