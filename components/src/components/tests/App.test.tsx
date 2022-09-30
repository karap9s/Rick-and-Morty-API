import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from 'components/mainPage/searchBar/searchBar';
import setLocalStorage from './localStorageMock';

describe('Main', () => {
  it('Search placeholder', () => {
    render(<Search />);
    screen.debug();
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
  });
});

describe('Mock Local Storage', () => {
  it('Add data', () => {
    render(<Search />);
    const mockId = '1';
    const mockJson = 'some data';
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });
});

describe('Mock Local Storage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('Delete data', () => {
    const mockId = 'Mock1';
    const mockJson = 'random data';
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });

  test('overwrite', () => {
    const mockId = 'Mock2';
    const mockOldData = 'random data';
    const mockNewData = 'new data';

    window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockOldData));

    setLocalStorage(mockId, mockNewData);
    window.localStorage.setItem(mockId, JSON.stringify(mockNewData));
  });
});
