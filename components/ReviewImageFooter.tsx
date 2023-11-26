import { GENRE_COLOR } from './PostImageFooter'

interface Props {
  genre: string[]
  study: string
}
export default function ReviewImageFooter({ genre, study }: Props) {
  return (
    <div className="flex w-full flex-col md:flex-row justify-evenly flex-wrap text-left items-center my-4">
      <div className="flex gap-1 flex-wrap justify-center items-center">
        Generos:
        {genre.map((genre) => {
          const genreInfo = GENRE_COLOR[genre]
          return (
            <span className={`p-1 rounded-full border-2 ${genreInfo.color}`} key={genre}>
              {genreInfo.name}
            </span>
          )
        })}
      </div>
      <span>Estudio: {study}</span>
    </div>
  )
}
