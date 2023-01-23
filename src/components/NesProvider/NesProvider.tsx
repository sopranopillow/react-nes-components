import * as React from 'react';
import { createProviderVars } from './utils';
import { useResetStyles } from './resetStyles';
import { mergeClasses } from '@griffel/react';

export const NesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const cssVarsId = createProviderVars();
  const resetClassName = useResetStyles();
  const nesProviderClassNames = mergeClasses(cssVarsId, resetClassName);

  return <div className={nesProviderClassNames}>{children}</div>;
};
