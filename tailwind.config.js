/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005f73", // Jedi Blue, primary for Star Wars theme
        secondary: "#9d0208", // Sith Red, secondary accent
        surface: "#ffffff", // White, for cards, dialogs, etc.
        background: "#0a0a0a", // Empire Black, dark background
        error: "#b00020", // Error color, from Material Design (unchanged)
        onPrimary: "#ffffff", // White text on Jedi Blue
        onSecondary: "#000000", // Black text on Sith Red
        tatooineSand: "#e09f3e", // Extra color for Tatooine sand vibe
        rebelOrange: "#ef8354", // Additional Rebel Alliance orange for accent
        hologramCyan: "#00f5d4", // Hologram-style cyan for glowing elements
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Material Design's default font, can remain as is
        starWars: ['"Star Jedi"', "sans-serif"], // Optional: Custom Star Wars font
      },
      borderRadius: {
        "4xl": "2rem", // Large rounded corners for the Material Design look
      },
      boxShadow: {
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Material-like shadows for depth
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        lightsaberGlow: "0 0 10px 2px rgba(0, 255, 255, 0.5)", // Custom Star Wars lightsaber glow effect
      },
    },
  },
  plugins: [],
};
