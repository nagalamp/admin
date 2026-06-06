// theme/index.ts

export const theme = {
  COLORS: {
    primary: "#FFD700",
    secondary: "#FFF7CC",

    border: "#E5E7EB",

    black: "#111827",
    white: "#FFFFFF",

    subtitle: "#64748B",
    placeholder: "#94A3B8",

    background: "#F8FAFC",
    card: "#FFFFFF",

    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",

    shadow: "#000000",
  },

  FONT_SIZES: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 22,
    xxxl: 26,

    heading: 30,
    largeHeading: 36,
    hero: 42,
  },

  SPACING: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  TYPOGRAPHY: {
    h1: 32,
    h2: 28,
    h3: 24,

    title: 20,
    body: 16,
    caption: 14,

    small: 12,
  },

  RADIUS: {
    sm: 6,
    md: 10,
    lg: 16,
    xl: 24,

    round: 999,
  },

  SHADOWS: {
    small: {
      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: 1,
      },

      shadowOpacity: 0.1,
      shadowRadius: 2,

      elevation: 2,
    },

    medium: {
      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: 3,
      },

      shadowOpacity: 0.15,
      shadowRadius: 4,

      elevation: 4,
    },

    large: {
      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: 6,
      },

      shadowOpacity: 0.2,
      shadowRadius: 8,

      elevation: 8,
    },

    card: {
      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: 5,
      },

      shadowOpacity: 0.08,
      shadowRadius: 10,

      elevation: 4,
    },
  },
};