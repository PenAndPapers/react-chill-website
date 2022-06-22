import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import style from './style.module.scss'
import SlideCard from './SlideCard'
import { SliderList } from '@/models/AboutUsSliderModel'

const ImageSlider = () => {

  const data: SliderList = {
    data: [
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'Chill slide 1'
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'Chill slide 2'
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'Chill slide 3'
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'Chill slide 4'
      },
      {
        id: 5,
        img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'Chill slide 5'
      }
    ]
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className={style.imageSlider}>
      <div className={style.sliderContainer}>
        <Slider {...settings}>
          { data.data.map(item => <SlideCard data={item} key={item.id} /> ) }
        </Slider>
      </div>
    </div>
  )
}

export default ImageSlider
