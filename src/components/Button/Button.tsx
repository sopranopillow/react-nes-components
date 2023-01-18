import * as React from 'react';
import { makeResetStyles } from '@griffel/react';
import { tokens } from '../../styles';

export type ButtonProps = React.PropsWithChildren;

const useButtonStyles = makeResetStyles({
  color: `var(${tokens.color0B})`,
});

export const Button: React.FC<ButtonProps> = props => {
  const buttonStyles = useButtonStyles();
  return <button className={buttonStyles} {...props} />;
};
