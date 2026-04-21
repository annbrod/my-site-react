import { useEffect } from 'react'

function useFadeInObserver() {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in')

        if (!elements.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate')
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.2,
            },
        )

        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}

export default useFadeInObserver
