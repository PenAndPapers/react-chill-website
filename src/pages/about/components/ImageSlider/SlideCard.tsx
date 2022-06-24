import { SlideCardModel } from '@/models/AboutUsSliderModel'

const SlideCard = (props: SlideCardModel) => {
  const { img, title } = props
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  )
}

export default SlideCard
