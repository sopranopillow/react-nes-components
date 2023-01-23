import { GriffelStyle, makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from './tokens';

const useRoundedCornersStyles = makeStyles({
  base: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('4px'),
    borderImageRepeat: 'stretch',
    borderImageSlice: 3,
    borderImageWidth: 3,
  },
  dark: {
    borderImageOutset: 2,
    borderImageSource: `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(#{red(${tokens.colorBlack})},#{green(${tokens.colorBlack})},#{blue(${tokens.colorBlack})})" /></svg>')`,
  },
  light: {
    borderImageOutset: 0,
    borderImageSource: `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(#{red(${tokens.colorWhite})},#{green(${tokens.colorWhite})},#{blue(${tokens.colorWhite})})" /></svg>')`,
  },
});

const useCompactRoundedCornersStyles = makeStyles({
  base: {
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('4px'),
    borderImageRepeat: 'stretch',
    borderImageSlice: 2,
    borderImageWidth: 2,
  },
  dark: {
    borderImageOutset: 2,
    borderImageSource: `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(#{red(${tokens.colorBlack})},#{green(${tokens.colorBlack})},#{blue(${tokens.colorBlack})})" /></svg>')`,
  },
  light: {
    borderImageOutset: 0,
    borderImageSource: `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(#{red(${tokens.colorWhite})},#{green(${tokens.colorWhite})},#{blue(${tokens.colorWhite})})" /></svg>')`,
  },
});

export const roundedCorners = (dark: boolean) => {
  const roundedCornersStyles = useRoundedCornersStyles();

  return mergeClasses(roundedCornersStyles.base, dark ? roundedCornersStyles.dark : roundedCornersStyles.light);
};

export const compactRoundedCorners = (dark: boolean) => {
  const compactRoundedCornersStyles = useCompactRoundedCornersStyles();

  return mergeClasses(
    compactRoundedCornersStyles.base,
    dark ? compactRoundedCornersStyles.dark : compactRoundedCornersStyles.light,
  );
};
