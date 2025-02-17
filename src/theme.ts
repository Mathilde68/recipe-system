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
      500: '#FAF1F1',  
      600: '#f8eded',
      700: '#d6cdcd',
      800: '#c1b8b8',
      900: '#afa1a1',
    },
    palecream: {
      50: '#FFF9F4',
      100: '#FDF2E9',
      200: '#FBEADD',
      300: '#F9E3D2',
      400: '#F7DCC6',
      500: '#EEDED9',  
      600: '#E4D0B6',
      700: '#DAC195',
      800: '#D0B373',
      900: '#DEC1B8',  
    },
    peachbrown: {
      50: '#F0D9CB',   
      100: '#FDE4D6',
      200: '#FBD9C1',
      300: '#F8CDAC',
      400: '#F6C198',
      500: '#F0B690',   
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
      500: '#593837',   
      600: '#4E3130',
      700: '#432A29',
      800: '#382323',
      900: '#2D1C1C',
    },
    darkbrown: {
      50: '#382E2E',
      100: '#322929',
      200: '#332828',    
      300: '#312525',
      400: '#2F2323',
      500: '#2C2020',   
      600: '#251A1A',
      700: '#1F1515',
      800: '#191010',
      900: '#1C1414',   
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
      800: '#111116',   
      900: '#0E0E0E',
    },
  },
  styles: {
    global: (props: any) => ({
    body: {
        bg: props.colorMode === "dark" ? "richblack.700" : "palecream.500", // Background for dark/light mode
        color: props.colorMode === "dark" ? "palecream.500" : "darkbrown.500", // Text color for dark/light mode
      },
    }),
  },
  components: {
    Switch: {
      baseStyle: {
        // This will apply your custom colors to the switch track and thumb
        track: {
          bg: "peachbrown.300", // Base color for light mode
          _checked: {
            bg: "peachbrown.600", // Base color for dark mode
          },
        },
        thumb: {
          bg: "creamwhite.200", // Thumb color
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
   
    pink: {
      bg: "#d98cbd", 
    },
    brown: {
      bg: "rosebrown.400", 
    },
    yellow: {
      bg: "#fad87a",
      color: "rosebrown.800"
    },
    green: {
      bg: "#8C947A", 
    },
    creme: {
      bg: "#eed8b4", 
      color: "rosebrown.800",
    },
    orange: {
      bg: "#e0992e", 
    },
    darkPink: {
      bg: "#702352",
    },
    red: {
      bg: "#c45454", 
    },
    caramel: {
      bg: "#b27c5c", 
    },
    purple: {
      bg: "#9666a9", 
    },
    blue: {
      bg: "#6f80c3", 
    },
    black: {
      bg: "#191615", 
    },

  },
},
}
});



export default theme;
