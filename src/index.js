/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
require('./favicon.ico');
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();

const client = new ApolloClient({
    uri: "http://35.199.81.116:4000/graphql"
});

const App = () => (
    <ApolloProvider client={client}>
    <Router routes={routes} history={browserHistory} />
    </ApolloProvider>
)
render(
    <App/>, document.getElementById('app')
);
