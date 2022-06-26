import React,{ useEffect, useRef } from 'react'
import gsap from 'gsap'
interface Props {
  className?: string;
}

const Art2 = React.forwardRef((props: Props, ref) => {
  let path1 = useRef()
  let path2 = useRef()
  let path3 = useRef()

  const handleAnimation = () => {
    const timeLine = gsap.timeline({
      defaults: {
        stagger: .5,
        duration: .45,
        delay: .45,
        ease: 'easeOut',
        // repeat: -1,
        // yoyo: true,
        // repeatDelay: .5
      }
    })
    timeLine
      .fromTo(
        [path1, path2, path3], 
        {opacity: 0}, 
        {opacity: 1}
      )
  }

  useEffect(() => {
    //handleAnimation()
  }, [])

  return (
    <svg ref={ref} width="78" height="102" viewBox="0 0 78 102" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <path ref={el => {path1 = el}} fillRule="evenodd" clipRule="evenodd" d="M51.8837 99.2461C56.0884 100.157 60.2398 101.096 64.4688 101.884C65.3781 102.057 66.2476 101.463 66.4165 100.559C66.5894 99.6497 65.9898 98.7761 65.086 98.6071C60.881 97.8199 56.7644 96.8905 52.5892 95.9843C51.6865 95.7913 50.7992 96.3644 50.6048 97.2578C50.4118 98.1605 50.981 99.0531 51.8837 99.2461Z" fill="black"/>
      <path ref={el => {path2 = el}} fillRule="evenodd" clipRule="evenodd" d="M41.0496 65.3545C52.9626 58.8051 64.5373 51.6577 76.3028 44.8585C77.1014 44.3942 77.3722 43.3747 76.9132 42.58C76.4489 41.7814 75.4335 41.5053 74.6295 41.9657C62.8866 48.7567 51.3348 55.8959 39.443 62.4278C38.6322 62.8749 38.3412 63.8878 38.7829 64.6946C39.23 65.5053 40.2428 65.7962 41.0496 65.3545Z" fill="black"/>
      <path ref={el => {path3 = el}} fillRule="evenodd" clipRule="evenodd" d="M3.59084 33.7477C8.85935 23.5338 13.8502 13.1566 19.2327 3.00182C19.6587 2.18803 19.3489 1.18006 18.539 0.748691C17.7238 0.313364 16.7119 0.628537 16.2805 1.43836C10.8955 11.6078 5.89673 21.9958 0.625661 32.2245C0.20504 33.0422 0.524104 34.0489 1.34185 34.4695C2.16497 34.8941 3.16626 34.5709 3.59084 33.7477Z" fill="black"/>
    </svg>
  )
})

export default Art2
