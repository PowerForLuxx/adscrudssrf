import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddAdForm from '../components/AddAdForm';
import { AdsContext } from '../context/AdsContext'; 

describe('AddAdForm', () => {
  test('submitting form with valid input adds new ad', () => {
    const mockDispatch = jest.fn(); 
    
    const { getByPlaceholderText, getByText } = render(
      <AdsContext.Provider value={{ dispatch: mockDispatch }}>
        <AddAdForm />
      </AdsContext.Provider>
    );
    const titleInput = getByPlaceholderText('Заголовок объявления');


    const descriptionInput = getByPlaceholderText('Описание');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });

    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });

    const submitButton = getByText('Добавить объявление');

    fireEvent.click(submitButton);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_AD',
      payload: { id: expect.any(String), title: 'Test Title', description: 'Test Description' }
    });
  });
});
