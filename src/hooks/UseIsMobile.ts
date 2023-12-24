import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export function useBreakpoints() {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    const [breakpoint, setBreakpoint] = useState(Breakpoints.Desktop);

    useEffect(() => {
        if (isMobile) {
            setBreakpoint(Breakpoints.Mobile);
        } else if (isTablet) {
            setBreakpoint(Breakpoints.Tablet);
        } else {
            setBreakpoint(Breakpoints.Desktop);
        }
    }, [isMobile, isTablet]);

    return { breakpoint };
};

export enum Breakpoints { Mobile, Tablet, Desktop }

