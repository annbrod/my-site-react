import './style.scss'

function Picture({
    img,
    classMod,
    loadingLazy = true,
    highFetchPriority = false,
    ref,
}) {
    return (
        <picture className={`${classMod || ''}`} ref={ref}>
            {img?.srcsets?.length &&
                img.srcsets.map((source, idx) =>
                    source?.srcset ? (
                        <source
                            key={idx}
                            srcSet={source.srcset}
                            type={source.type}
                            media={source.media}
                        />
                    ) : null,
                )}

            <img
                src={img.src}
                alt={img.alt || ''}
                width={img.width}
                height={img.height}
                loading={loadingLazy ? 'lazy' : 'eager'}
                fetchPriority={highFetchPriority ? 'high' : undefined}
            />
        </picture>
    )
}

export default Picture
