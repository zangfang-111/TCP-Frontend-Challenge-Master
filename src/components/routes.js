import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Layout from './layout';

const RootRoutes = () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<Layout />} />
    </Routes>
  </Router>
);

export default RootRoutes;
