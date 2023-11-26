import RankingStars from './RankingStars'

interface Props {
  ranking: number
}

export default function ReviewStars({ ranking }: Props) {
  return (
    <div className="flex justify-evenly my-8">
      <span className="font-bold text-4xl">Puntuacion: </span>
      <RankingStars ranking={ranking} size={true} />
    </div>
  )
}
