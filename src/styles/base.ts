export const colorPalette: Record<string, string> = {
  colorBlack: '#212529',
  colorWhite: '#fff',
  color00: '#7c7c7c',
  color01: '#0000fc',
  color02: '#0000bc',
  color03: '#4428bc',
  color04: '#940084',
  color05: '#a80020',
  color06: '#a81000',
  color07: '#881400',
  color08: '#503000',
  color09: '#007800',
  color0A: '#006800',
  color0B: '#005800',
  color0C: '#004058',
  color0D: '#000',
  color0E: '#000',
  color0F: '#000',

  color10: '#bcbcbc',
  color11: '#0078f8',
  color12: '#0058f8',
  color13: '#6844fc',
  color14: '#d800cc',
  color15: '#e40058',
  color16: '#f83800',
  color17: '#e45c10',
  color18: '#ac7c00',
  color19: '#00b800',
  color1A: '#00a800',
  color1B: '#00a844',
  color1C: '#088',
  color1D: '#000',
  color1E: '#000',
  color1F: '#000',

  color20: '#f8f8f8',
  color21: '#3cbcfc',
  color22: '#6888fc',
  color23: '#9878f8',
  color24: '#f878f8',
  color25: '#f85898',
  color26: '#f87858',
  color27: '#fca044',
  color28: '#f8b800',
  color29: '#b8f818',
  color2A: '#58d854',
  color2B: '#58f898',
  color2C: '#00e8d8',
  color2D: '#787878',
  color2E: '#000',
  color2F: '#000',

  color30: '#fcfcfc',
  color31: '#a4e4fc',
  color32: '#b8b8f8',
  color33: '#d8b8f8',
  color34: '#f8b8f8',
  color35: '#f8a4c0',
  color36: '#f0d0b0',
  color37: '#fbdfa6',
  color38: '#f8d878',
  color39: '#d8f878',
  color3A: '#b8f8b8',
  color3B: '#b8f8d8',
  color3C: '#00fcfc',
  color3D: '#d8d8d8',
  color3E: '#000',
  color3F: '#000',
};

export const variables = {
  fontFamily: 'Press Start 2P',
  fontSize: '16px',
  baseColor: colorPalette.colorBlack,
  backgroundColor: colorPalette.colorWhite,
  borderSize: '4px',
};

export const defaultColors = {
  normal: variables.backgroundColor,
  hover: '#e7e7e7',
  shadow: '#adafbc',
};

export const disabledColors = {
  normal: '#d3d3d3',
  shadow: '#adafbc',
};

export const primaryColors = {
  normal: '#209cee',
  hover: '#108de0',
  shadow: '#006bb3',
};

export const successColors = {
  normal: '#92cc41',
  hover: '#76c442',
  shadow: '#4aa52e',
};

export const warningColors = {
  normal: '#f7d51d',
  hover: '#f2c409',
  shadow: '#e59400',
};

export const errorColors = {
  normal: '#e76e55',
  hover: '#ce372b',
  shadow: '#8c2022',
};
