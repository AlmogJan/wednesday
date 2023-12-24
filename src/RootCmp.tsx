import { Breakpoints, useBreakpoints } from "./hooks/UseIsMobile";
import { App } from "./App";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from "@mui/material/colors";

export function RootCmp() {

  const theme = createTheme({
    palette: {
      primary: blueGrey
    },
    typography: {
      fontFamily: 'Rubik'
    }
  });
  const breakpointsClassesMapping: Record<Breakpoints, string> = {
    [Breakpoints.Mobile]: "mobile",
    [Breakpoints.Tablet]: "tablet",
    [Breakpoints.Desktop]: "desktop",
  }
  const { breakpoint } = useBreakpoints()
  const [breakpointClass, setBreakpointClass] = useState(breakpointsClassesMapping[Breakpoints.Desktop]);

  useEffect(() => {
    setBreakpointClass(breakpointsClassesMapping[breakpoint])
  }, [breakpoint])

  return <div className={breakpointClass}>
    <ThemeProvider theme={theme}>
      <App breakpointClass={breakpointClass} ></App>
    </ThemeProvider>
  </div>
}
