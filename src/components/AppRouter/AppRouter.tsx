import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from 'src/pages/Main/Main';
import About from 'src/pages/About/About';
import NotFound from 'src/pages/NotFound/NotFound';
import { AppRoutes } from 'src/constants/AppRoutes';

export default class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path={AppRoutes.main} element={<Main />} />
        <Route path={AppRoutes.about} element={<About />} />
        <Route path={AppRoutes.notFound} element={<NotFound />} />
      </Routes>
    );
  }
}
