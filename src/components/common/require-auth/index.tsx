import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../../hooks';

interface RequireAuthProps {
  children: ReactElement | null;
}

function RequireAuth({ children }: RequireAuthProps) {
  const { accessToken } = useAppSelector((state) => state.auth);

  if (!accessToken) {
    return <Navigate to="/auth" />;
  }

  return children;
}

export default RequireAuth;
