import './style.scss'

function Logo({ tag = 'a', img, classMod }) {
    const Tag = tag

    return (
        <Tag className={`logo ${classMod ? classMod : ''}`}>
            <img src={img} alt="Logo" />
        </Tag>
    )
}

export default Logo
