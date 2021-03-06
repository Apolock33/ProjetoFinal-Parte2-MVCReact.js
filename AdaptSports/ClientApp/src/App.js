import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Paginas/Home/Home';
import { FetchData } from './components/Paginas/Esportes/FetchData';
import { Counter } from './components/Paginas/SobreNos/Counter';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import Locais from './components/Paginas/Locais/Locais.js'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/SobreNos' component={Counter} />
        <Route path='/Locais' component={Locais} />
        <Route path='/Esportes' component={FetchData}/>
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
