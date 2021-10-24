import React from 'react';
import Input from '../../Components/Input/Input';
import { render, fireEvent } from '@testing-library/react';


describe('Input component', () => {
    test('renders without crashing', () => {
        render(<Input />);
    });

    //<input type={props.ipType} id={props.ipName} data-testid='input' name={props.ipName} className={props.ipClass} onChange={props.onSelect} value={props.ipValue} autoComplete='off'/>

    test('name field label render correctly', () => {
        const { getByTestId } = render(<Input labelName='USERNAME' ipType='text' />);
        const inputLabel = getByTestId('label');

        expect(inputLabel.textContent).toBe('USERNAME');
    });
    test('password field label render correctly', () => {
        const { getByTestId } = render(<Input labelName='PASSWORD' ipType='password' />);
        const inputLabel = getByTestId('label');

        expect(inputLabel.textContent).toBe('PASSWORD');
    });
    test('change of name field value works correctly', () => {
        const { getByTestId } = render(<Input type='text' />);
        const inputEl = getByTestId('input');

        expect(inputEl.value).toBe('');

        fireEvent.change(inputEl, {
            target: {
                value: 'myname'
            }
        });

        expect(inputEl.value).toBe('myname');
    });
    test('change of password field value works correctly', () => {
        const { getByTestId } = render(<Input ipType='password' />);
        const inputEl = getByTestId('input');

        expect(inputEl.value).toBe('');

        fireEvent.change(inputEl, {
            target: {
                value: 'mypassword'
            }
        });

        expect(inputEl.value).toBe('mypassword');
    });
    // test('change of checkbox field value works correctly', () => {

    //     const { getByTestId } = render(<Input ipType='checkbox'/>);
    //     const inputEl = getByTestId('input');

    //     expect(inputEl.checked).toBeFalsy();

    //     fireEvent.click(inputEl);

    //     expect(inputEl.checked).toBeTruthy();

    //     fireEvent.click(inputEl);

    //     expect(inputEl.checked).toBeFalsy();
    // });
})