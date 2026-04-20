import './style.scss'
import Picture from '../../components/ui/Picture/Picture'
import { use, useEffect, useRef } from 'react'
import { useBreakpoint } from '../../hooks/useBreakpoint'

function MainBlock({ mainBlock }) {
    const parallaxWrapRef = useRef(null)
    const parallaxBgRef = useRef(null)
    const parallaxLogoRef = useRef(null)
    const parallax1Ref = useRef(null)
    const parallax2Ref = useRef(null)
    const { greaterThanTablet } = useBreakpoint()

    useEffect(() => {
        const wrap = parallaxWrapRef.current

        if (!wrap) return

        const { width, height, left, top } = wrap.getBoundingClientRect()

        const scrollMove = () => {
            const scrollY = window.scrollY
            parallaxBgRef.current?.style.setProperty(
                'transform',
                `translate(0px, ${scrollY * 0.3}px)`,
            )
        }

        const handleMouseMove = (e) => {
            const x = (e.clientX - left) / width - 0.5
            const y = (e.clientY - top) / height - 0.5
            parallaxLogoRef.current?.style.setProperty(
                'transform',
                `translate(${x * -20}px, ${y * -20}px)`,
            )

            parallax1Ref.current?.style.setProperty(
                'transform',
                `translate(${x * -7}px, ${y * 8}px)`,
            )

            parallax2Ref.current?.style.setProperty(
                'transform',
                `translate(${x * 5}px, ${y * 5}px)`,
            )
        }

        wrap.addEventListener('mousemove', handleMouseMove)
        window.document.addEventListener('scroll', scrollMove)
        return () => {
            wrap.removeEventListener('mousemove', handleMouseMove)
            window.document.removeEventListener('scroll', scrollMove)
        }
    }, [])
    return (
        <section className="main-block" ref={parallaxWrapRef}>
            <Picture
                classMod="main-block__background"
                ref={parallaxBgRef}
                img={{
                    src: mainBlock.img.src,
                    srcsets: mainBlock.img.srcsets,
                    alt: mainBlock.img.alt,
                    width: mainBlock.img.width,
                    height: mainBlock.img.height,
                }}
            />
            <Picture
                classMod="main-block__logo"
                ref={parallaxLogoRef}
                img={{
                    src: mainBlock.imgLogo.src,
                    alt: mainBlock.imgLogo.alt,
                    width: mainBlock.imgLogo.width,
                    height: mainBlock.imgLogo.height,
                }}
            />
            {greaterThanTablet && (
                <>
                    <Picture
                        classMod="main-block__parallax-1"
                        ref={parallax1Ref}
                        img={{
                            src: mainBlock.parallax1.src,
                            alt: mainBlock.parallax1.alt,
                            width: mainBlock.parallax1.width,
                            height: mainBlock.parallax1.height,
                        }}
                    />
                    <Picture
                        classMod="main-block__parallax-2"
                        ref={parallax2Ref}
                        img={{
                            src: mainBlock.parallax2.src,
                            alt: mainBlock.parallax2.alt,
                            width: mainBlock.parallax2.width,
                            height: mainBlock.parallax2.height,
                        }}
                    />
                </>
            )}
        </section>
    )
}

export default MainBlock
