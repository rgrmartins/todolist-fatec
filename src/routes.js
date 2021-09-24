import React from 'react';

import { Switch, Route } from 'react-router-dom';

// Import Pages
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/contact' component={Contact} />
    </Switch>
  )
}
