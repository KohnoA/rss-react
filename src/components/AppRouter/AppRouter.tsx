import { Routes, Route } from 'react-router-dom';
import { APP_ROUTES } from 'src/constants/appRoutes';

export default function AppRouter() {
  return (
    <Routes>
      {APP_ROUTES.map((route) => (
        <Route key={route.id} path={route.link} element={route.component} />
      ))}
    </Routes>
  );
}
