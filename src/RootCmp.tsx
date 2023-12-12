import { Breakpoints, useBreakpoints } from "./hooks/UseIsMobile";
import { App } from "./App";
import { useState, useEffect } from "react";

export function RootCmp() {
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
    <App breakpointClass={breakpointClass} ></App>
  </div>
}
