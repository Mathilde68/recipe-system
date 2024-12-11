import { Badge, baseTheme, ButtonGroup, CardBody, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from "@chakra-ui/theme-tools";
import { px } from "framer-motion";


const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({ 
  config,
  fonts: {
    heading: `"Frank Ruhl Libre", serif`,
    body: `"Inter", sans-serif`,
  },
  colors: {
    creamwhite: {
      50: '#FFFFFF',
      100: '#FEF8F8',
      200: '#FDF1F1',
      300: '#FBE9E9',
      400: '#FAE2E2',
      500: '#FAF1F1',  // Base color
      600: '#E4D9D9',
      700: '#CDC2C2',
      800: '#B6AAAA',
      900: '#9F9292',
    },
    palecream: {
      50: '#FFF9F4',
      100: '#FDF2E9',
      200: '#FBEADD',
      300: '#F9E3D2',
      400: '#F7DCC6',
      500: '#EEDED9',  // Base color
      600: '#E4D0B6',
      700: '#DAC195',
      800: '#D0B373',
      900: '#DEC1B8',  // Darker color
    },
    peachbrown: {
      50: '#F0D9CB',   // Light peach color
      100: '#FDE4D6',
      200: '#FBD9C1',
      300: '#F8CDAC',
      400: '#F6C198',
      500: '#F0B690',   // Base color
      600: '#D99E80',
      700: '#C28770',
      800: '#AA6F60',
      900: '#935850',
    },
    rosebrown: {
      50: '#DAC3C2',
      100: '#C5AEAC',
      200: '#B09997',
      300: '#9B8481',
      400: '#6E4745',
      500: '#593837',   // Base color
      600: '#4E3130',
      700: '#432A29',
      800: '#382323',
      900: '#2D1C1C',
    },
    darkbrown: {
      50: '#382E2E',// Lighter and desat brown color
      100: '#322929',
      200: '#332828',    
      300: '#312525',
      400: '#2F2323',
      500: '#2C2020',   // Base color
      600: '#251A1A',
      700: '#1F1515',
      800: '#191010',
      900: '#1C1414',   // Darkest color
    },
    richblack: {
      50: '#2A2A2A',
      100: '#262626',
      200: '#222222',
      300: '#1E1E1E',
      400: '#1A1A1A',
      500: '#161616',
      600: '#141414',
      700: '#121212',
      800: '#111116',   // Base color
      900: '#0E0E0E',
    },
  },
  styles: {
    global: (props: any) => ({
    body: {
        bg: props.colorMode === "dark" ? "richblack.800" : "palecream.500", // Background for dark/light mode
        color: props.colorMode === "dark" ? "palecream.500" : "darkbrown.500", // Text color for dark/light mode
      },
    }),
  },
  components: {
    Switch: {
      baseStyle: {
        // This will apply your custom colors to the switch track and thumb
        track: {
          bg: "peachbrown.200", // Base color for light mode
          _checked: {
            bg: "peachbrown.500", // Base color for dark mode
          },
        },
        thumb: {
          bg: "creamwhite.500", // Thumb color
        },
      },
    },
    Text: {
      baseStyle: (props: any) => ({
        color: props.colorMode === "dark" ? "palecream.500" : "darkbrown.500", //Overring text color on component level to make it work
      })
    },
    Badge: {
      baseStyle: (props: any) => ({
        bg: "#2C3245",
        color: "creamwhite.500",
        textTransform: 'capitalize',
        fontWeight: "bold",
        px: 3,
        py: 1.5,
        borderRadius: "8px",
  }),
  variants: {
    // Define specific variants if needed
    pink: {
      bg: "#CB8B9F",
    },
    brown: {
      bg: "rosebrown.400",
    },
    yellow: {
      bg: "#D4A547",
    },
    green: {
      bg: "#8C947A",
    },
    creme: {
      bg: "#FFE4BA",
      color: "rosebrown.500",
    }

  },
},
}
});



export default theme;
