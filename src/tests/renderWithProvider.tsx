import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'src/store';

export const renderWithProvider = (Component: React.ReactNode) => {
  return render(<Provider store={store}>{Component}</Provider>);
};
