import { createTheme } from "@mui/material";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const colors = {
   background: "#fff",
   primary: "#0156a7",
   secondary: "#d1d1d1",
   danger: "#ed1b24",
   success: "#008963",
   text: "#323232",
};

const GlobalStyle = createGlobalStyle`
  body {
    background:${colors.background};
    color:${colors.text};
    padding: 0;
    margin: 0;
  }
`;

const muiTheme = createTheme({
   typography: {
      allVariants: {
         color: colors.text,
      },
   },
   palette: {
      primary: {
         main: colors.primary,
      },
      secondary: {
         main: colors.secondary,
      },
      danger: { main: colors.danger },
      success: { main: colors.success },
   },
});

const styledTheme = {
   textColor: colors.text,
   primary: colors.primary,
   secondary: colors.secondary,
   danger: colors.danger,
   success: colors.success,
};

const ThemeProvider = ({ children }) => {
   return (
      <MuiThemeProvider theme={muiTheme}>
         <GlobalStyle />
         <StyledThemeProvider theme={styledTheme}>
            {children}
         </StyledThemeProvider>
      </MuiThemeProvider>
   );
};

export default ThemeProvider;