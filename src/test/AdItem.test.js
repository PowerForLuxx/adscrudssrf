import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AdItem from '../components/AdItem';
import { AdsProvider } from '../context/AdsContext';

test('clicking on edit button switches to edit mode', () => {
  const ad = { id: '1', title: 'Test Title', description: 'Test Description' };
  const { getByText, getByDisplayValue } = render(
    <AdsProvider>
      <AdItem ad={ad} />
    </AdsProvider>
  );
  const editButton = getByText('Редактировать');
  fireEvent.click(editButton);

  const titleInput = getByDisplayValue('Test Title');
  const descriptionInput = getByDisplayValue('Test Description');

  expect(titleInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
});