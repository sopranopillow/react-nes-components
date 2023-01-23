import { makeResetStyles } from '@griffel/react';

export const useResetStyles = makeResetStyles({
  '*,*::before,*::after': {
    boxSizing: 'border-box',
  },
  html: {
    fontFamily: 'sans-serif',
    lineHeight: '1.15',
    '-webkit-text-size-adjust': '100%',
    '-ms-overflow-style': 'scrollbar',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
  },
  '@-ms-viewport': {
    width: 'device-width',
  },

  'article,aside,figcaption,figure,footer,header,hgroup,main,nav,section': {
    display: 'block',
  },

  body: {
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji"`,
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    textAlign: 'left',
    backgroundColor: '#fff',
  },

  '[tabindex="-1"]:focus': {
    outline: '0 !important',
  },

  hr: {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },

  'h1,h2,h3,h4,h5,h6': {
    marginTop: 0,
    marginBottom: '0.5rem',
  },

  p: {
    marginTop: 0,
    marginBottom: '1rem',
  },

  'abbr[title],abbr[data-original-title]': {
    '-webkit-text-decoration': 'underline dotted',
    textDecoration: 'underline dotted',
    cursor: 'help',
    borderBottom: 0,
  },

  address: {
    marginBottom: '1rem',
    fontStyle: 'normal',
    lineHeight: 'inherit',
  },

  'ol,ul,dl': {
    marginTop: 0,
    marginBottom: '1rem',
  },

  'ol ol,ul ul,ol ul,ul ol': {
    marginBottom: 0,
  },

  dt: {
    fontWeight: 700,
  },

  dd: {
    marginBottom: '0.5rem',
    marginLeft: 0,
  },

  blockquote: {
    margin: '0 0 1rem',
  },

  'b,strong': {
    fontWeight: 'bolder',
  },

  small: {
    fontSize: '80%',
  },

  'sub,sup': {
    position: 'relative',
    fontSize: '75%',
    lineHeight: 0,
    verticalAlign: 'baseline',
  },

  sub: {
    bottom: '-0.25em',
  },

  sup: {
    top: '-0.5em',
  },

  a: {
    color: '#007bff',
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },

  'a:hover': {
    color: '#0056b3',
    textDecoration: 'underline',
  },

  'a:not([href]):not([tabindex])': {
    color: 'inherit',
    textDecoration: 'none',
  },

  'a:not([href]):not([tabindex]):hover,a:not([href]):not([tabindex]):focus': {
    color: 'inherit',
    textDecoration: 'none',
  },

  'a:not([href]):not([tabindex]):focus': {
    outline: 0,
  },

  'pre,code,kbd,samp': {
    fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: '1em',
  },

  pre: {
    marginTop: 0,
    marginBottom: '1rem',
    overflow: 'auto',
    '-ms-overflow-style': 'scrollbar',
  },

  figure: {
    margin: '0 0 1rem',
  },

  img: {
    verticalAlign: 'middle',
    borderStyle: 'none',
  },

  svg: {
    overflow: 'hidden',
    verticalAlign: 'middle',
  },

  table: {
    borderCollapse: 'collapse',
  },

  caption: {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    color: '#6c757d',
    textAlign: 'left',
    captionSide: 'bottom',
  },

  th: {
    textAlign: 'inherit',
  },

  label: {
    display: 'inline-block',
    marginBottom: '0.5rem',
  },

  button: {
    borderRadius: 0,
  },

  'input,button,select,optgroup,textarea': {
    margin: 0,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  },

  'button,input': {
    overflow: 'visible',
  },

  'button,select': {
    textTransform: 'none',
  },

  'button,[type="button"],[type="reset"],[type="submit"]': {
    '-webkit-appearance': 'button',
  },

  'button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner':
    {
      padding: 0,
      borderStyle: 'none',
    },

  'button:focus': {
    outline: '1px dotted',
  },

  'input[type="radio"],input[type="checkbox"]': {
    boxSizing: 'border-box',
    padding: 0,
  },

  'input[type="date"],input[type="time"],input[type="datetime-local"],input[type="month"]': {
    '-webkit-appearance': 'listbox',
  },

  textarea: {
    overflow: 'auto',
    resize: 'vertical',
  },

  fieldset: {
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
  },

  legend: {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    padding: 0,
    marginBottom: '0.5rem',
    fontSize: '1.5rem',
    lineHeight: 'inherit',
    color: 'inherit',
    whiteSpace: 'normal',
  },

  progress: {
    verticalAlign: 'baseline',
  },

  '[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button': {
    height: 'auto',
  },

  '[type="search"]': {
    outlineOffset: '-2px',
    '-webkit-appearance:': 'none',
  },

  '[type="search"]::-webkit-search-decoration': {
    '-webkit-appearance': 'none',
  },

  '::-webkit-file-upload-button': {
    font: 'inherit',
    '-webkit-appearance': 'button',
  },

  output: {
    display: 'inline-block',
  },

  summary: {
    display: 'list-item',
    cursor: 'pointer',
  },

  template: {
    display: 'none',
  },

  '[hidden]': {
    display: 'none !important',
  },
});
