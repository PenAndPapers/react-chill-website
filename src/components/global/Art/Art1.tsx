import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Props {
  className?: string;
}

const Art1 = (props: Props) => {
  let path1 = useRef()
  let path2 = useRef()
  let path3 = useRef()
  let path4 = useRef()

  const handleAnimation = () => {
    const timeLine = gsap.timeline()
    timeLine
      .fromTo(
        [path1, path2, path3, path4], 
        {
          opacity: 0,
          ease: 'easeIn'
        }, 
        {
          opacity: 1,
          stagger: .25,
          duration: 1,
          ease: 'easeOut'
        }
      )
  }

  useEffect(() => {
    handleAnimation()
  }, [])

  return (
    <svg width="80" height="117" viewBox="0 0 80 117" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <path ref={el => {path1 = el}} d="M80 42.684C80 66.0545 61.1015 85 37.7889 85C14.4764 85 0 66.0545 0 42.684C0 19.3135 4.50286 0 27.8154 0C51.1279 0 80 19.3135 80 42.684Z" fill="#FFA9D9" />
      <path ref={el => {path2 = el}} fillRule="evenodd" clipRule="evenodd" d="M6.98249 85.2639C5.20754 86.0588 3.44149 86.8357 1.68745 87.6814C0.202349 88.3985 -0.419154 90.1884 0.297999 91.6735C1.01515 93.1586 2.80209 93.7801 4.28719 93.063C5.99043 92.2413 7.7056 91.4882 9.42976 90.7143C10.9358 90.039 11.608 88.27 10.9327 86.764C10.2574 85.2609 8.48851 84.5886 6.98249 85.2639Z" fill="#FFA9D9"/>
      <path ref={el => {path3 = el}} fillRule="evenodd" clipRule="evenodd" d="M18.7736 95.6985C16.2158 101.239 13.9387 106.904 11.5004 112.495C10.84 114.007 11.5334 115.77 13.0454 116.43C14.5574 117.088 16.3173 116.397 16.9777 114.885C19.4011 109.333 21.6571 103.707 24.2 98.2056C24.8903 96.7085 24.236 94.9306 22.7389 94.2403C21.2419 93.547 19.4639 94.2015 18.7736 95.6985Z" fill="#FFA9D9"/>
      <path ref={el => {path4 = el}} fillRule="evenodd" clipRule="evenodd" d="M40.4883 98.4296C41.3041 103.501 42.2632 108.559 43.0192 113.639C43.2642 115.268 44.7852 116.394 46.4167 116.152C48.0483 115.907 49.1748 114.386 48.9327 112.755C48.1678 107.654 47.2086 102.574 46.3899 97.4794C46.1269 95.8509 44.594 94.7423 42.9655 95.0053C41.337 95.2652 40.2254 96.8011 40.4883 98.4296Z" fill="#FFA9D9"/>
    </svg>
  )
}

export default Art1
