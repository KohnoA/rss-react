import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import mathcers from '@testing-library/jest-dom/matchers';

expect.extend(mathcers);

afterEach(() => cleanup());
