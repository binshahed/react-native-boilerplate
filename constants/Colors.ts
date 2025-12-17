/**
 * Complete Color Palette
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// ============================================
// BRAND COLORS
// ============================================
export const brandColors = {
  primary: "#0C3265", // Primary brand color
  secondary: "#2F80ED", // Secondary brand color (using Info blue as default)
} as const;

// ============================================
// STATE COLORS
// ============================================
export const stateColors = {
  info: "#2F80ED",
  success: "#27AE60",
  warning: "#E2B93B",
  error: "#EB5757",
  orange: "#F29921",
} as const;

// ============================================
// BLACK COLORS
// ============================================
export const blackColors = {
  black1: "#000000",
  black2: "#1D1D1D",
  black3: "#282828",
  white: "#FFFFFF",
} as const;

// ============================================
// GREY COLORS
// ============================================
export const greyColors = {
  gray1: "#333333",
  gray2: "#4F4F4F",
  gray3: "#828282",
  gray4: "#A4ABB4",
  gray5: "#BDBDBD",
  gray6: "#E0E0E0",
} as const;

// ============================================
// BLUE COLORS (with states)
// ============================================
export const blueColors = {
  light: {
    base: "#e7ebf0",
    hover: "#dbe0e8",
    active: "#b4bfcf",
  },
  normal: {
    base: "#0c3265", // Same as brand.primary
    hover: "#0b2d5b",
    active: "#0a2851",
  },
  dark: {
    base: "#09264c",
    hover: "#071e3d",
    active: "#05162d",
  },
  darker: {
    base: "#041223",
  },
} as const;

// ============================================
// LEGACY COLORS (for backward compatibility)
// ============================================
export const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

// Primary color system
export const primaryColor = brandColors.primary;
export const primaryColorDisabled = "#b2c8d7";
export const orangeColor = stateColors.orange;
export const inputLabelColor = "#004DF6";

// Primary color variants - keeping for backward compatibility
export const primaryColors = {
  50: "#FFF8E1",
  100: "#FFECB3",
  200: "#FFE082",
  300: "#FFD54F",
  400: "#FFCA28",
  500: "#FFBC44",
  600: "#FFA000",
  700: "#FF8F00",
  800: "#FF6F00",
  900: "#E65100",
} as const;

// Legacy primary color for backward compatibility
export const legacyPrimaryColor = "#008ce3";

export const pageBackgroundColor = {
  light: "#F8F9FD",
  dark: "#111827",
};

export const cardBackgroundColor = {
  light: "#ffff",
  dark: "#1A1930",
};
