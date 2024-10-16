// theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Define custom colors, fonts, and styles
const theme = extendTheme({
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
  colors: {
    brand: {
      900: "#0d0d0d", // Deep space black
      800: "#1a202c", // Dark gray for surfaces
      700: "#2d3748", // Lighter gray for components
      600: "#4a5568", // Accent gray
      500: "#718096", // Even lighter gray
      400: "#a0aec0", // Light accents
      300: "#cbd5e0", // Some brightness for contrast
      200: "#e2e8f0", // Light grays for borders or highlights
      100: "#edf2f7", // Almost white for text
    },
    yellow: {
      500: "#ffe81f", // Star Wars iconic yellow for text or highlights
    },
    red: {
      500: "#ff0000", // Sith red for dangerous actions
    },
    blue: {
      500: "#0056b3", // Jedi blue for buttons or interactive elements
    },
    green: {
      500: "#00ff00", // Light green for some contrasts or positive actions
    },
  },
  fonts: {
    heading: "'Star Jedi', sans-serif", // Custom Star Wars font for headers
    body: "'Roboto', sans-serif", // Simple sans-serif for body text
  },
  styles: {
    global: {
      body: {
        bg: "brand.900", // Setting a dark background
        color: "brand.100", // Light text
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "none", // Squared buttons for a more futuristic look
      },
      variants: {
        jedi: {
          bg: "blue.500",
          color: "white",
          _hover: {
            bg: "blue.600",
          },
        },
        sith: {
          bg: "red.500",
          color: "white",
          _hover: {
            bg: "red.600",
          },
        },
        default: {
          bg: "yellow.500",
          color: "black",
          _hover: {
            bg: "yellow.600",
          },
        },
      },
    },
    Tabs: {
      baseStyle: (props: Record<string, unknown>) => ({
        tab: {
          _selected: {
            color: "white", // color for selected tab in light/dark mode
            borderBottomColor: mode("white.500", "white.500")(props), // active tab underline color
          },
          _hover: {},
          fontWeight: "bold", // Customize font weight
        },
        tablist: {
          borderBottomColor: "none", // Border color in light/dark mode
        },
      }),
      variants: {
        solidRounded: (props: Record<string, unknown>) => ({
          tab: {
            bg: mode("gray.200", "gray.700")(props),
            color: mode("gray.600", "whiteAlpha.900")(props),
            borderRadius: "md",
            _selected: {
              bg: mode("blue.500", "blue.300")(props),
              color: "white",
            },
          },
        }),
      },
    },
    Card: {
      sizes: {
        // Set responsive widths using Chakra's responsive syntax
        responsive: {
          w: { base: "100%", sm: "80%", md: "60%", lg: "50%", xl: "40%" },
        },
        // Other custom sizes
        md: {
          w: "400px",
        },
        lg: {
          w: "600px",
        },
      },
    },
  },
});

export default theme;
