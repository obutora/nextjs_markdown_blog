
export default function SnsIcon({ src, colorName, alt, href }) {
    const iconClass = `${colorName} z-10 rounded-full w-7 p-1.5 mb-1`

    return (
        <div className={iconClass} id={'snsCircleButton'}>
            <a href={href}>
                <img src={src} alt={alt} />
            </a>
        </div>
    )
}