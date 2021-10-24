import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Button component', () => {
    test('renders without crashing', () => {
        render(<Card />);
    });

    //<div className={props.cardClass} data-testid='card' style={{backgroundColor: props.cardColor, color: props.textColor}}>{props.cardText}</div>

    test('card text render correctly', () => {
        const {getByTestId} = render(<Card cardText='This is a card !!' />);
        const cardEl = getByTestId('card');

        expect(cardEl.textContent).toBe('This is a card !!');
    })
    test('card size, bg-color, text-color render correctly', () => {
        const {getByTestId} = render(<Card cardClass='large-card' cardColor='blue' textColor='white' />);
        const cardEl = getByTestId('card');

        expect(cardEl.className).toBe('large-card');

        expect(cardEl.style.backgroundColor).toBe('blue');

        expect(cardEl.style.color).toBe('white');
    })

});