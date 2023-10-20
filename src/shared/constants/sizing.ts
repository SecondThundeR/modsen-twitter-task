export const DIMENSIONS_MAP = {
  fit: "fit-content",
  full: "100%",
  fullScreen: "100vh",
  headerSize: "86px",
  narrowLayoutBlock: "1408px",
  narrowSignupBlock: "670px",
  narrowSigninBlock: "450px",
} as const;

export const GAP_MAP = {
  small: "4px",
  regular: "8px",
  medium: "16px",
  semiLarge: "18px",
  large: "24px",
  extraLarge: "32px",
} as const;

export const PADDING_MAP = {
  button: {
    regular: "18px 80px",
    phone: "18px 16px",
  },
  input: "20px 24px",
  footer: "18px 0",
  header: "0 16px",
  contentWrapper: {
    regular: "0 96px 0 36px",
    phone: "0px 16px",
  },
  alert: "32px 24px",
} as const;

export const MARGIN_MAP = {
  footer: "0px auto",
  navigation: "32px 32px 0 0",
  registerWrapper: {
    regular: "16px auto",
    phone: "16px",
  },
} as const;

export const RADIUS_MAP = {
  button: "42px",
  alert: "8px",
  input: "6px",
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
  button: "20px",
  input: "18px",
  textButton: "18px",
} as const;
