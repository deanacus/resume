const colours = {
  blue: {
    lighter: 'rgb(25,167,209)',
    default: 'rgb(19,140,194)',
    darker: '',
  },
  green: {
    lighter: 'rgb(104,212,163)',
    default: 'rgb(57,189,133)',
    darker: '',
  },
  lightBlue: {
    lighter: 'rgb(99,212,225)',
    default: 'rgb(63,189,213)',
    darker: '',
  },
  red: {
    lighter: 'rgb(238,106,110)',
    default: 'rgb(232,85,89)',
    darker: '',
  },
  orange: {
    lighter: 'rgb(249,191,143)',
    default: 'rgb(240,166,94)',
    darker: '',
  },
  yellow: {
    lighter: 'rgb(253,233,148)',
    default: 'rgb(244,212,81)',
    darker: '',
  },
  lightGreen: {
    lighter: 'rgb(126,219,198)',
    default: 'rgb(90,195,179)',
    darker: '',
  },
  darkBlue: {
    lighter: 'rgb(82,122,189)',
    default: 'rgb(59,95,166)',
    darker: 'rgb(36,68,143)',
  },
  charcoal: {
    lightest: 'rgb(112,124,117)',
    lighter: 'rgb(82,94,87)',
    default: 'rgb(46,56,68)',
    darker: '',
  },
  white: {
    default: `rgba(255,255,255)`,
  },
};

const remSize = 10;

const spacing = [0, 8, 16, 24, 32, 48, 64];

const m = [
  `margin: ${spacing[0] / remSize}rem`,
  `margin: ${spacing[1] / remSize}rem`,
  `margin: ${spacing[2] / remSize}rem`,
  `margin: ${spacing[3] / remSize}rem`,
  `margin: ${spacing[4] / remSize}rem`,
  `margin: ${spacing[5] / remSize}rem`,
  `margin: ${spacing[6] / remSize}rem`,
];

const mx = [
  `margin-right: ${spacing[0] / remSize}rem;
  margin-left: ${spacing[0] / remSize}rem;`,
  `margin-right: ${spacing[1] / remSize}rem;
  margin-left: ${spacing[1] / remSize}rem;`,
  `margin-right: ${spacing[2] / remSize}rem;
  margin-left: ${spacing[2] / remSize}rem;`,
  `margin-right: ${spacing[3] / remSize}rem;
  margin-left: ${spacing[3] / remSize}rem;`,
  `margin-right: ${spacing[4] / remSize}rem;
  margin-left: ${spacing[4] / remSize}rem;`,
  `margin-right: ${spacing[5] / remSize}rem;
  margin-left: ${spacing[5] / remSize}rem;`,
  `margin-right: ${spacing[6] / remSize}rem;
  margin-left: ${spacing[6] / remSize}rem;`,
];

const my = [
  `margin-top: ${spacing[0] / remSize}rem;
  margin-bottom: ${spacing[0] / remSize}rem;`,
  `margin-top: ${spacing[1] / remSize}rem;
  margin-bottom: ${spacing[1] / remSize}rem;`,
  `margin-top: ${spacing[2] / remSize}rem;
  margin-bottom: ${spacing[2] / remSize}rem;`,
  `margin-top: ${spacing[3] / remSize}rem;
  margin-bottom: ${spacing[3] / remSize}rem;`,
  `margin-top: ${spacing[4] / remSize}rem;
  margin-bottom: ${spacing[4] / remSize}rem;`,
  `margin-top: ${spacing[5] / remSize}rem;
  margin-bottom: ${spacing[5] / remSize}rem;`,
  `margin-top: ${spacing[6] / remSize}rem;
  margin-bottom: ${spacing[6] / remSize}rem;`,
];

const mt = [
  `margin-top: ${spacing[0] / remSize}rem;`,
  `margin-top: ${spacing[1] / remSize}rem;`,
  `margin-top: ${spacing[2] / remSize}rem;`,
  `margin-top: ${spacing[3] / remSize}rem;`,
  `margin-top: ${spacing[4] / remSize}rem;`,
  `margin-top: ${spacing[5] / remSize}rem;`,
  `margin-top: ${spacing[6] / remSize}rem;`,
];

const mr = [
  `margin-right: ${spacing[0] / remSize}rem;`,
  `margin-right: ${spacing[1] / remSize}rem;`,
  `margin-right: ${spacing[2] / remSize}rem;`,
  `margin-right: ${spacing[3] / remSize}rem;`,
  `margin-right: ${spacing[4] / remSize}rem;`,
  `margin-right: ${spacing[5] / remSize}rem;`,
  `margin-right: ${spacing[6] / remSize}rem;`,
];

const mb = [
  `margin-bottom: ${spacing[0] / remSize}rem;`,
  `margin-bottom: ${spacing[1] / remSize}rem;`,
  `margin-bottom: ${spacing[2] / remSize}rem;`,
  `margin-bottom: ${spacing[3] / remSize}rem;`,
  `margin-bottom: ${spacing[4] / remSize}rem;`,
  `margin-bottom: ${spacing[5] / remSize}rem;`,
  `margin-bottom: ${spacing[6] / remSize}rem;`,
];

const ml = [
  `margin-left: ${spacing[0] / remSize}rem;`,
  `margin-left: ${spacing[1] / remSize}rem;`,
  `margin-left: ${spacing[2] / remSize}rem;`,
  `margin-left: ${spacing[3] / remSize}rem;`,
  `margin-left: ${spacing[4] / remSize}rem;`,
  `margin-left: ${spacing[5] / remSize}rem;`,
  `margin-left: ${spacing[6] / remSize}rem;`,
];

const margin = {
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
};

const p = [
  `padding: ${spacing[0] / remSize}rem`,
  `padding: ${spacing[1] / remSize}rem`,
  `padding: ${spacing[2] / remSize}rem`,
  `padding: ${spacing[3] / remSize}rem`,
  `padding: ${spacing[4] / remSize}rem`,
  `padding: ${spacing[5] / remSize}rem`,
  `padding: ${spacing[6] / remSize}rem`,
];

const px = [
  `padding-right: ${spacing[0] / remSize}rem;
  padding-left: ${spacing[0] / remSize}rem;`,
  `padding-right: ${spacing[1] / remSize}rem;
  padding-left: ${spacing[1] / remSize}rem;`,
  `padding-right: ${spacing[2] / remSize}rem;
  padding-left: ${spacing[2] / remSize}rem;`,
  `padding-right: ${spacing[3] / remSize}rem;
  padding-left: ${spacing[3] / remSize}rem;`,
  `padding-right: ${spacing[4] / remSize}rem;
  padding-left: ${spacing[4] / remSize}rem;`,
  `padding-right: ${spacing[5] / remSize}rem;
  padding-left: ${spacing[5] / remSize}rem;`,
  `padding-right: ${spacing[6] / remSize}rem;
  padding-left: ${spacing[6] / remSize}rem;`,
];

const py = [
  `padding-top: ${spacing[0] / remSize}rem;
  padding-bottom: ${spacing[0] / remSize}rem;`,
  `padding-top: ${spacing[1] / remSize}rem;
  padding-bottom: ${spacing[1] / remSize}rem;`,
  `padding-top: ${spacing[2] / remSize}rem;
  padding-bottom: ${spacing[2] / remSize}rem;`,
  `padding-top: ${spacing[3] / remSize}rem;
  padding-bottom: ${spacing[3] / remSize}rem;`,
  `padding-top: ${spacing[4] / remSize}rem;
  padding-bottom: ${spacing[4] / remSize}rem;`,
  `padding-top: ${spacing[5] / remSize}rem;
  padding-bottom: ${spacing[5] / remSize}rem;`,
  `padding-top: ${spacing[6] / remSize}rem;
  padding-bottom: ${spacing[6] / remSize}rem;`,
];

const pt = [
  `padding-top: ${spacing[0] / remSize}rem;`,
  `padding-top: ${spacing[1] / remSize}rem;`,
  `padding-top: ${spacing[2] / remSize}rem;`,
  `padding-top: ${spacing[3] / remSize}rem;`,
  `padding-top: ${spacing[4] / remSize}rem;`,
  `padding-top: ${spacing[5] / remSize}rem;`,
  `padding-top: ${spacing[6] / remSize}rem;`,
];

const pr = [
  `padding-right: ${spacing[0] / remSize}rem;`,
  `padding-right: ${spacing[1] / remSize}rem;`,
  `padding-right: ${spacing[2] / remSize}rem;`,
  `padding-right: ${spacing[3] / remSize}rem;`,
  `padding-right: ${spacing[4] / remSize}rem;`,
  `padding-right: ${spacing[5] / remSize}rem;`,
  `padding-right: ${spacing[6] / remSize}rem;`,
];

const pb = [
  `padding-bottom: ${spacing[0] / remSize}rem;`,
  `padding-bottom: ${spacing[1] / remSize}rem;`,
  `padding-bottom: ${spacing[2] / remSize}rem;`,
  `padding-bottom: ${spacing[3] / remSize}rem;`,
  `padding-bottom: ${spacing[4] / remSize}rem;`,
  `padding-bottom: ${spacing[5] / remSize}rem;`,
  `padding-bottom: ${spacing[6] / remSize}rem;`,
];

const pl = [
  `padding-left: ${spacing[0] / remSize}rem;`,
  `padding-left: ${spacing[1] / remSize}rem;`,
  `padding-left: ${spacing[2] / remSize}rem;`,
  `padding-left: ${spacing[3] / remSize}rem;`,
  `padding-left: ${spacing[4] / remSize}rem;`,
  `padding-left: ${spacing[5] / remSize}rem;`,
  `padding-left: ${spacing[6] / remSize}rem;`,
];

const padding = {
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
};

const fontSize = [
  '1.0rem',
  '1.2rem',
  '1.4rem',
  '1.6rem',
  '2.0rem',
  '2.4rem',
  '3.4rem',
  '4.8rem',
  '6.0rem',
  '9.6rem',
];

const fontWeight = ['regular', 'bold', 'black'];

const fontFamily = {
  serif: '',
  sansSerif: '"Lato", "Trebuchet MS", sans-serif',
  mono: '',
};

export const theme = {
  remSize,
  colours,
  spacing,
  margin,
  padding,
  fontSize,
  fontWeight,
  fontFamily,
};
