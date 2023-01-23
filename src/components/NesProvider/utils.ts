import * as React from 'react';
import { colorPalette } from '../../theme';

export const createProviderVars = (): string => {
  // We need to replace : otherwise it will break insertRule
  const tagId = React.useId().replaceAll(':', '--nes--');
  const styleTag = React.useRef<HTMLStyleElement>();
  const targetDocument = document;
  let style = '';

  Object.keys(colorPalette).forEach(key => {
    style += `--nes-${key}: ${colorPalette[key]}; `;
  });

  const rule = `.${tagId} { ${style} }`;

  React.useInsertionEffect(() => {
    styleTag.current = createStyleTag(targetDocument, { id: tagId });

    if (styleTag.current) {
      innerSheet(styleTag.current, rule);

      return () => {
        styleTag.current?.remove();
      };
    }
  }, [tagId, targetDocument, rule]);

  return tagId;
};

const createStyleTag = (target: Document | undefined, elementAttributes: Record<string, string>) => {
  if (!target) {
    return undefined;
  }

  const tag = target.createElement('style');

  Object.keys(elementAttributes).forEach(attrName => {
    tag.setAttribute(attrName, elementAttributes[attrName]);
  });

  target.head.appendChild(tag);
  return tag;
};

const innerSheet = (tag: HTMLStyleElement, rule: string) => {
  const sheet = tag.sheet;

  if (sheet) {
    if (sheet.cssRules.length > 0) {
      sheet.deleteRule(0);
    }
    sheet.insertRule(rule, 0);
  } else if (process.env.NODE_ENV !== 'production') {
    console.error('NesProvider: No sheet available on styleTag, styles will not be inserted into DOM.');
  }
};
