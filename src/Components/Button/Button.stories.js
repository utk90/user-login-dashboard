import React from 'react';

import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    buttonText: {control: 'text'},
    buttonBgColor: {control: 'color'},
    buttonTextColor: {control: 'color'},
    buttonClass: {control: {
      type: 'radio',
      options: ['small-btn','medium-btn','large-btn']
    }}
  }
};

const Template = args => <Button {...args} />;

export const ButtonInstance = Template.bind({});

ButtonInstance.args = {
  // buttonType: 'submit',
  buttonClass: 'medium-btn',
  isError: {username: '', password: ''},
  buttonText: 'Button',
  buttonBgColor: 'black',
  buttonTextColor: 'white',
}




