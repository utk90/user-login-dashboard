import React from 'react';
import Checkbox from './Checkbox';

export default {
    title: 'components/Checkbox',
    component: Checkbox,
    argTypes: {
        labelName: { control: 'text' },
    }
};

const Tempate = args => <Checkbox {...args} />;

export const CheckboxInstance = Tempate.bind({});

CheckboxInstance.args = {
    ipName: 'checkbox',
    labelName: 'Remember me',
    ipClass: 'inputCheckbox'
}