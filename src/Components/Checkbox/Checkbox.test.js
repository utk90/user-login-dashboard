import React from 'react';
import Checkbox from '../../Components/Checkbox/Checkbox';
import { render, fireEvent } from '@testing-library/react';


describe('Checkbox component', () => {
    test('renders without crashing', () => {
        render(<Checkbox />);
    });

    test('checkbox field label render correctly', () => {
        const { getByTestId } = render(<Checkbox labelName='Remember me'/>);
        const checkboxLabel = getByTestId('label');

        expect(checkboxLabel.textContent).toBe('Remember me');

    });

    test('change of checkbox field value works correctly', () => {

        const { getByTestId } = render(<Checkbox ipType='checkbox'/>);
        const checkboxEl = getByTestId('checkbox');

        expect(checkboxEl.checked).toBeFalsy();

        fireEvent.click(checkboxEl);

        expect(checkboxEl.checked).toBeTruthy();

        fireEvent.click(checkboxEl);

        expect(checkboxEl.checked).toBeFalsy();
    });

});