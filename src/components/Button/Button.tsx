import * as React from 'react';
import { makeResetStyles, mergeClasses } from '@griffel/react';
import { compactRoundedCorners, tokens } from '../../theme';
import { roundedCorners } from '../../theme';

export type ButtonProps = React.PropsWithChildren;

const useButtonStyles = makeResetStyles({
  position: 'relative',
  display: 'inline-block',
  padding: '6px 8px',
  margin: '4px', // TODO: use theme
  textAlign: 'center',
  verticalAlign: 'middle',
  //   cursor: ', pointer' TODO: route image
  userSelect: 'none',

  '&:focus': {
    outline: 0,
  },
  '&:disabled,&:disabled:hover,&:disabled:focus': {
    color: tokens.colorBlack,
    cursor: 'not-allowed',
    backgroundColor: '#d3d3d3',
    boxShadow: 'inset -4px -4px #adafbc',
    opacity: '0.6',
  },
  '&:disabled:hover::after': {
    boxShadow: 'inset -4px -4px #adafbc',
  },
  'input[type="file"]': {
    position: 'absolute',
    pointerEvents: 'none',
    opacity: 0,
  },
});

export const Button: React.FC<ButtonProps> = props => {
  const buttonStyles = useButtonStyles();
  return <button className={mergeClasses(buttonStyles, compactRoundedCorners(false /* dark */))} {...props} />;
};
