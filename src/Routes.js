import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import NewContact from './Pages/NewContact';
import EditContact from './Pages/EditContact';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={NewContact} />
      <Route exact path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
