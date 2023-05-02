import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store';
import { IWindowExt } from './types/IWindowExt';

const store = setupStore((window as IWindowExt).__PRELOADED_STATE__);
delete (window as IWindowExt).__PRELOADED_STATE__;

function hydration() {
  ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

hydration();
