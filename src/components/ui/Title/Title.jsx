function Title({ tag = 'h1', text, classMod }) {
    const Tag = tag

    return <Tag className={`title ${classMod ? classMod : ''}`}>{text}</Tag>
}

export default Title
