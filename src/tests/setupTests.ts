import { expect, vi } from 'vitest';
import mathcers from '@testing-library/jest-dom/matchers';
import createFetchMock from 'vitest-fetch-mock';

const fetchMock = createFetchMock(vi);

fetchMock.enableMocks();

expect.extend(mathcers);
