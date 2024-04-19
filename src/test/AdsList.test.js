import React from 'react';
import { render } from '@testing-library/react';
import AdsList from '../components/AdsList';
import { AdsContext } from '../context/AdsContext'; 

test('renders ads list correctly', () => {
  const ads = [
    { id: '1', title: 'Ad 1', description: 'Description 1' },
    { id: '2', title: 'Ad 2', description: 'Description 2' },
  ];
  const contextValue = {
    ads: ads,
  };

  const { getByRole, getByText } = render(
    <AdsContext.Provider value={contextValue}>
      <AdsList />
    </AdsContext.Provider>
  );
  const ad1Element = getByRole('heading', { name: /Ad 1/i });
  const description1Element = getByText(/Description 1/i);
  const ad2Element = getByRole('heading', { name: /Ad 2/i });
  const description2Element = getByText(/Description 2/i);

  expect(ad1Element).toBeInTheDocument();
  expect(description1Element).toBeInTheDocument();
  expect(ad2Element).toBeInTheDocument();
  expect(description2Element).toBeInTheDocument();
});
