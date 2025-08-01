import React from 'react';
import { Button as MantineButton } from '@mantine/core';

const Button = ({ label, ...props }) => {
  return <MantineButton {...props}>{label}</MantineButton>;
};

export default Button;
