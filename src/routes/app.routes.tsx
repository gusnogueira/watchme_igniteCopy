import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout';
import Action from '../pages/Action';
import Comedy from '../pages/Comedy';
import Documentary from '../pages/Documentary';
import Drama from '../pages/Drama';
import Horror from '../pages/Horror';
import Family from '../pages/Family';

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/action" exact component={Action} />
      <Route path="/comedy" exact component={Comedy} />
      <Route path="/documentary" exact component={Documentary} />
      <Route path="/drama" exact component={Drama} />
      <Route path="/horror" exact component={Horror} />
      <Route path="/family" exact component={Family} />
    </Switch>
  </Layout>

);

export default AppRoutes;