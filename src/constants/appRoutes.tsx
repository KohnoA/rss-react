import { IRoute } from 'src/types/IRoute';
import Main from '../pages/Main/Main';
import About from 'src/pages/About/About';
import Form from 'src/pages/Form/Form';
import NotFound from 'src/pages/NotFound/NotFound';

export const APP_ROUTES: IRoute[] = [
  {
    id: 0,
    link: '*',
    test: 'nav-not-found-link',
    title: 'Not Found',
    component: <NotFound />,
  },
  {
    id: 1,
    link: '/',
    test: 'nav-main-link',
    title: 'Main',
    component: <Main />,
  },
  {
    id: 2,
    link: '/about',
    test: 'nav-about-link',
    title: 'About',
    component: <About />,
  },
  {
    id: 3,
    link: '/form',
    test: 'nav-form-link',
    title: 'Form',
    component: <Form />,
  },
];
