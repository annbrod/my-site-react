import './style.scss'

function Icon({ name, classMod }) {
    return <i className={`icon icon-${name} ${classMod ? classMod : ''}`}></i>
}

export default Icon
