import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/layout';
import RequireAuth from './components/common/require-auth/RequireAuth';
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="auth" element={<Auth />} />
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
