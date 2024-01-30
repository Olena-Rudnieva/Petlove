export const breakpoints = ['320', '768', '1280'];

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#262626',
    accent: '#F6B83D',
  },

  fontFamily: {
    manrope: "'Manrope', sans-serif",
    inter: "'Inter', sans-serif",
    montserrat: "'Montserrat', sans-serif",
    poppins: "'Poppins', sans-serif",
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  breakpoints: [
    `${breakpoints[0]}px`,
    `${breakpoints[1]}px`,
    `${breakpoints[2]}px`,
  ],

  mq: {
    mobile: `@media screen and (max-width: ${breakpoints[0]}px)`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[2]}px)`,
  },

  space: [
    '0',
    '4px',
    '8px',
    '16px',
    '20px',
    '24px',
    '32px',
    '64px',
    '128px',
    '256px',
    '512px',
  ],

  boxShadow: {
    main: '7px 4px 14px rgba(49, 21, 4, 0.07)',
    second: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    notice: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
};
