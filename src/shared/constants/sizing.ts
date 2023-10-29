export const DIMENSIONS_MAP = {
  fit: "fit-content",
  full: "100%",
  half: "50%",
  fullScreen: "100vh",
  header: "86px",
  mobileNavigation: "64px",
  profileHeaderImage: "280px",
  narrowLayoutBlock: "1408px",
  narrowSignupBlock: "670px",
  narrowSigninBlock: "450px",
} as const;

export const GAP_MAP = {
  small: "4px",
  regular: "8px",
  compact: "12px",
  medium: "16px",
  semiLarge: "18px",
  large: "24px",
  extraLarge: "32px",
} as const;

export const PADDING_MAP = {
  button: {
    regular: "18px 64px",
    compact: "16px 32px",
    small: "12px 24px",
    phone: "18px 36px",
  },
  input: "20px 24px",
  textArea: "4px",
  footer: "18px 0",
  tab: "18px 0",
  header: "0 16px",
  contentWrapper: {
    regular: "0 96px 0 36px",
    phone: "0px 16px",
  },
  alert: "32px 24px",
  placeholder: "18px",
  tweetWrapper: {
    regular: "16px 24px",
    phone: "16px",
  },
  composerWrapper: "18px 24px",
  modal: "16px 20px",
  profileBlock: "24px 16px",
  mobileNavigation: "0px 16px",
  search: "12px 16px",
  sidebarBlock: "18px",
} as const;

export const MARGIN_MAP = {
  footer: "0px auto",
  navigation: "32px",
  sidebar: "20px 24px",
  registerWrapper: {
    regular: "16px auto",
    phone: "16px",
  },
  errorBoundary: "32px auto",
} as const;

export const RADIUS_MAP = {
  modal: "12px",
  alert: "8px",
  input: "6px",
  image: "16px",
  sidebarBlock: "18px",
  search: "32px",
  button: "42px",
} as const;

export const FONT_SIZE_MAP = {
  text: {
    inherit: "inherit",
    small: "13px",
    regular: "14px",
    large: "16px",
  },
  title: {
    extrasmall: {
      desktop: "18px",
      phone: "16px",
    },
    compact: {
      desktop: "24px",
      phone: "18px",
    },
    small: {
      desktop: "30px",
      phone: "24px",
    },
    regular: {
      desktop: "42px",
      phone: "32px",
    },
    large: {
      desktop: "84px",
      phone: "48px",
    },
  },
  button: {
    regular: "20px",
    compact: "18px",
    small: "16px",
  },
  input: "18px",
  textButton: {
    regular: "18px",
    phone: "16px",
  },
} as const;

export const TEXT_LINE_HEIGHT = 1.3;
