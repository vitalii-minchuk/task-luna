import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/layout';
import RequireAuth from './components/common/require-auth';
import AuthPage from './pages/auth';
import HomePage from './pages/home';
import NotFound from './pages/not-found';

function App() {
  return (
    <Routes>
      <Route path="auth" element={<AuthPage />} />
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
