export const BREAKPOINTS = {
    mobile: 320,
    mobileMedium: 375,
    mobileWide: 425,

    tablet: 768,

    desktop: 1024,
    desktopMedium: 1280,
    desktopWide: 1440,
}

import { useState, useEffect } from 'react'

export function useBreakpoint() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return {
        isMobile: width < BREAKPOINTS.tablet,
        isTablet: width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop,
        isDesktop: width >= BREAKPOINTS.desktop,
    }
}
