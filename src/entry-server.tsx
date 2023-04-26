import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

interface IRenderProps {
  path: string;
  options?: RenderToPipeableStreamOptions;
}

export function render({ path, options }: IRenderProps) {
  return ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
}
