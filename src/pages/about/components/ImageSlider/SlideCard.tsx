import { SlideCardModel } from '@/models/AboutUsSliderModel'

interface Props {
  data: SlideCardModel
}

const SlideCard = (props: Props) => {
  const { img, title } = props.data
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  )
}

export default SlideCard
