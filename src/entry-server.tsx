import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { productApi } from './services/ProductService';

export async function render(path: string, options?: RenderToPipeableStreamOptions) {
  const store = setupStore();

  store.dispatch(productApi.endpoints.getAllProducts.initiate({ filter: '', page: 1 }));
  await Promise.all(store.dispatch(productApi.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();

  return [
    ReactDOMServer.renderToPipeableStream(
      <Provider store={store}>
        <StaticRouter location={path}>
          <App />
        </StaticRouter>
      </Provider>,
      options
    ),
    preloadedState,
  ];
}
