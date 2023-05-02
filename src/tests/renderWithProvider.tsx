import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'src/store';

export const renderWithProvider = (Component: React.ReactNode) => {
  const store = setupStore();

  return render(<Provider store={store}>{Component}</Provider>);
};
