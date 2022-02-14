import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Layout } from './components/Layout';
import { RouteMatcher } from './components/RouteMatcher';

import './App.css';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<></>} />
        <Route path="*" element={<RouteMatcher />} />
      </Route>
    </Routes>
  </Router>
);
