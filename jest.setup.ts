import '@testing-library/jest-dom';
import 'next';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
beforeEach(() => {
    fetchMock.resetMocks();
});
