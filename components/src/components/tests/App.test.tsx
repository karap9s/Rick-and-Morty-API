import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from 'components/mainPage/searchBar/searchBar';
import setLocalStorage from './localStorageMock';
import About from 'components/about/about';
import NotFound from 'components/notFound/notFound';
import Form from 'components/form/form';
import { getFilterCharacters } from 'components/api/api';

// describe('Main', () => {
//   it('Search placeholder', () => {
//     render(<Search />);
//     screen.debug();
//     expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
//   });
// });

describe('About', () => {
  it("Search author's name", () => {
    render(<About />);
    screen.debug();
    expect(screen.getByText(/Daniil Sharenkov/i)).toBeInTheDocument();
  });
});

describe('Not Found', () => {
  it('Search Heading', () => {
    render(<NotFound />);
    screen.debug();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});

// describe('Form', () => {
//   it('Search Headings', () => {
//     render(<Form />);
//     screen.debug();
//     expect(screen.getByText(/Surname/i)).toBeInTheDocument();
//   });

//   it('Search Headings', () => {
//     render(<Form />);
//     screen.debug();
//     expect(screen.getByText(/Avatar/i)).toBeInTheDocument();
//   });

//   it('Search Headings', () => {
//     render(<Form />);
//     screen.debug();
//     expect(screen.getByText(/Country/i)).toBeInTheDocument();
//   });

//   it('Search Headings', () => {
//     render(<Form />);
//     screen.debug();
//     expect(screen.getByText(/Date/i)).toBeInTheDocument();
//   });
// });

// describe('Mock Local Storage', () => {
//   it('Add data', () => {
//     render(<Search />);
//     const mockId = '1';
//     const mockJson = 'some data';
//     setLocalStorage(mockId, mockJson);
//     expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
//   });
// });

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

// describe('Mock API Calls', () => {
//   test('Add "Rick" call', async () => {
//     const mockCall = 'Rick';
//     const response = await getFilterCharacters(mockCall);

//     expect(response).toEqual(await getFilterCharacters('Rick'));
//   });

//   test('Add empty call', async () => {
//     const mockCall = '';
//     const response = await getFilterCharacters(mockCall);

//     expect(response).toEqual(await getFilterCharacters(''));
//   });
// });
