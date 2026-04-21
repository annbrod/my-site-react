import { useEffect, useState } from 'react'
import clsx from 'clsx'
import './style.scss'

function Preloader({ onFinish }) {
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        document.documentElement.classList.add('no-scroll')
        const timer = setTimeout(() => {
            setIsHidden(true)
            document.body.classList.add('preloader-hidden')

            // даём время на fade-out
            setTimeout(() => {
                onFinish?.()
                document.documentElement.classList.remove('no-scroll')
            }, 1200)
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={clsx('preloader', { 'preloader--hidden': isHidden })}>
            <div className="preloader__logo">
                <img
                    src="/images/inhtml/logo.svg"
                    alt="logo"
                    width={140}
                    height={140}
                />
            </div>
        </div>
    )
}

export default Preloader
