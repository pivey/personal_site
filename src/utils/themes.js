const createBreakpoint = width => `(min-width: ${width}px)`;
const createMaxBreakpoint = width => `(max-width: ${width}px)`;

export const maxContentWidth = '77.5rem'; // 1240px

export const breakpoints = {
  mobileS: 0, // 0-359, but 320 is "min".
  // mobileS is the default styling and should not be used as a query
  mobileM: 360, // 360-479
  mobileL: 480, // 480-767
  tablet: 768, // 768-1023
  laptop: 1024, // 1024-1439
  desktop: 1440, // 1440+
};

export const device = {
  mobileS: createBreakpoint(breakpoints.mobileS),
  belowMobileS: createMaxBreakpoint(breakpoints.mobileS - 1),
  mobileM: createBreakpoint(breakpoints.mobileM),
  belowMobileM: createMaxBreakpoint(breakpoints.mobileM - 1),
  mobileL: createBreakpoint(breakpoints.mobileL),
  belowMobileL: createMaxBreakpoint(breakpoints.mobileL - 1),
  tablet: createBreakpoint(breakpoints.tablet),
  belowTablet: createMaxBreakpoint(breakpoints.tablet - 1),
  laptop: createBreakpoint(breakpoints.laptop),
  belowLaptop: createMaxBreakpoint(breakpoints.laptop - 1),
  desktop: createBreakpoint(breakpoints.desktop),
  belowDesktop: createMaxBreakpoint(breakpoints.desktop - 1),
};

export const themes = {
  light: {
    type: 'light',
    navColor: '#faffb8',
    navTextColor: '#226b80',
    // bgColor: '#c5f0a4',
    bgColor: '#1e392a',
    headerColor: '#3CC47C',
    // color: '#3E4C59',
    color: 'white',
    searchBgColor: '#E4E7EB',
    boxShadow: '0.8rem 0.8rem 1.5rem gray',
    hoverColor: '#ffbab8',
    delay: '0.6s',
    projectColor: '#ffa15d',
    listText: '#edf0c7',
    listEven: '#4e9525',
    listOdd: '#a1c45a',
    listBeforeEven: '#ff5c00',
    listBeforeOdd: '#2e5a1c',
    textBorder: 'white',
  },
  dark: {
    type: 'dark',
    navColor: '#182952',
    navTextColor: '#e14594',
    bgColor: '#2b3595',
    headerColor: '#e14594',
    color: 'white',
    searchBgColor: '#E4E7EB',
    boxShadow: '0.4rem 0.4rem 1.5rem #111111',
    hoverColor: '#45e1de',
    delay: '0.6s',
    projectColor: '#854af2',
    listText: 'white',
    listEven: '#861388',
    listOdd: '#320D6D',
    listBeforeEven: '#320D6D',
    listBeforeOdd: '#FFD447',
    textBorder: 'black',
  },
};
