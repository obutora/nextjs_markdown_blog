import Script from 'next/script'
import { useEffect } from 'react'
import anime from 'animejs'

export default function SnsIcon({ src, colorName, alt, href }) {
    // useEffect(() => {
    //     <Script src='https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js'></Script>
    //     let options = {
    //         root: null,
    //         rootMargin: '0px 0px',
    //         threshold: 0
    //     }

    //     let snsCircles = document.querySelectorAll('#snsCircleButton');
    //     let snsCirclesObserver = new IntersectionObserver(popAnimation, options);

    //     console.log(snsCircles)
    //     console.log('snsCircles')

    //     snsCircles.forEach(
    //         box => {
    //             snsCirclesObserver.observe(box);
    //         }
    //     )

    //     function popAnimation(entries) {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 anime({
    //                     targets: '#snsCircleButton',
    //                     // easing: 'easeOutCirc',
    //                     opacity: [0, 1],
    //                     translateY: [-60, 0],
    //                     delay: anime.stagger(160),
    //                     duration: 1200
    //                 })
    //             }
    //         });
    //     }

    // }, [])

    const iconClass = `${colorName} z-10 rounded-full w-7 p-1.5 mb-1`

    return (
        <div className={iconClass} id={'snsCircleButton'}>
            <a href={href}>
                <img src={src} alt={alt} />
            </a>
        </div>
    )
}