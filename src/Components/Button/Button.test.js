import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../Components/Button/Button';

//<Button data-testid='button' buttonType="submit" buttonText="LOGIN" buttonClass="medium-btn" buttonBgColor='black' buttonTextColor='white' isError={errors} />

describe('Button component', () => {
    test('renders without crashing', () => {
        render(<Button isError='' />);
    });
   
    test('button text render correctly', () => {
        const { getByTestId } = render(<Button buttonText='LOGIN' isError='' />);
        const buttonEl = getByTestId('button');

        expect(buttonEl.textContent).toBe('LOGIN');
    });
    test('button click event works correctly', () => {
        const handleClick = jest.fn();

        const { getByTestId } = render(<Button clickEvent={handleClick} buttonType='submit' buttonText='LOGIN' isError='' />);
        const buttonEl = getByTestId('button');

        expect(handleClick).toHaveBeenCalledTimes(0);

        fireEvent.click(buttonEl);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('button disabled works correctly', () => {
        const handleClick = jest.fn();
        const error = {username: 'required', password: 'required'};

        const { getByTestId } = render(<Button buttonType='submit' buttonText='LOGIN' isError={error} />);
        const buttonEl = getByTestId('button');

        expect(buttonEl.disabled).toBeTruthy();

        fireEvent.click(buttonEl);

        expect(handleClick).toHaveBeenCalledTimes(0);
    });
});