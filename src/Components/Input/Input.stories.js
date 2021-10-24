import React from 'react';
import Input from './Input';

export default {
    title: 'components/Input',
    component: Input,
    argTypes: {
        labelName: { control: 'text' },
        ipType: { control: {type: 'radio', options: ['text', 'password']} }
    }
};

const Tempate = args => <Input {...args} />;

export const InputInstance = Tempate.bind({});

InputInstance.args = {
    ipType: 'text',
    ipName: 'username',
    ipClass: 'form-control',
    // onSelect: '',
    // ipValue: '',
    labelName: 'USERNAME'
}