import { useRoutes } from 'react-router-dom';

import Home from './Pages/Home';
import NewContact from './Pages/NewContact';
import EditContact from './Pages/EditContact';

export default function Router() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/new', element: <NewContact /> },
    { path: '/edit/:id', element: <EditContact /> },
  ]);
  return routes;
}
