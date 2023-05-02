import { PreloadedState } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

export interface IWindowExt extends Window {
  __PRELOADED_STATE__?: PreloadedState<RootState>;
}
