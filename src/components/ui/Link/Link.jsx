import './style.scss'

function Link({ classMod, children, to }) {
    return (
        <a className={`link ${classMod ? classMod : ''}`} href={to}>
            {children}
        </a>
    )
}

export default Link
