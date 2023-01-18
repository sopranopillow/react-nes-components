import * as React from 'react';
import { tokens, colorPalette } from '../styles';

const cssRuleToString = (rule: string | Record<string, Object>) => {
  if (typeof rule === 'string') {
    return rule;
  }

  let s = '';
  const keys = Object.keys(rule);

  keys.forEach(k => {
    s += `${k}: {${typeof rule[k] === 'object' ? cssRuleToString(rule[k] as Record<string, Object>) : rule[k]}};`;
  });
};

export const NesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const doc = typeof document === 'object' ? document : undefined;

  if (doc) {
    const style = doc.createElement('style');

    Object.keys(tokens).forEach(token => {
      style.innerHTML += `${tokens[token]}: ${colorPalette[token]};`;
    });

    doc.head.appendChild(style);
  }

  return <div>{children}</div>;
};
