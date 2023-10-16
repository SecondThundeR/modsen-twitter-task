export const DIMENSIONS_MAP = {
  fit: "fit-content",
  full: "100%",
};

export const GAP_MAP = {
  regular: "8px",
  medium: "16px",
} as const;

export const PADDING_MAP = {
  button: "18px 80px",
  input: "20px 24px",
} as const;

export const RADIUS_MAP = {
  button: "42px",
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
