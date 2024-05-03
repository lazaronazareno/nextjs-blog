import RankingStars from './RankingStars'

interface Props {
  genre: string[]
  study: string
  ranking: number
  fanservice: number
  background: boolean
}

export const GENRE_COLOR = {
  fantasy: {
    name: 'Fantasía',
    color: 'border-blue-700',
  },
  action: {
    name: 'Acción',
    color: 'border-red-700',
  },
  comedy: {
    name: 'Comedia',
    color: 'border-lime-500',
  },
  romance: {
    name: 'Romance',
    color: 'border-pink-500',
  },
  science_fiction: {
    name: 'Ciencia Ficción',
    color: 'border-gray-700',
  },
  adventure: {
    name: 'Aventura',
    color: 'border-yellow-500',
  },
  drama: {
    name: 'Drama',
    color: 'border-blue-950',
  },
  horror: {
    name: 'Terror',
    color: 'border-purple-900',
  },
  mystery: {
    name: 'Misterio',
    color: 'border-rose-700',
  },
  slice_of_life: {
    name: 'Recuentos de la vida',
    color: 'border-zinc-50',
  },
  mecha: {
    name: 'Mecha',
    color: 'border-yellow-700',
  },
  supernatural: {
    name: 'Sobrenatural',
    color: 'border-violet-600',
  },
  shonen: {
    name: 'Shonen',
    color: 'border-orange-700',
  },
  shoujo: {
    name: 'Shoujo',
    color: 'border-pink-600',
  },
  seinen: {
    name: 'Seinen',
    color: 'border-slate-500',
  },
  josei: {
    name: 'Josei',
    color: 'border-orange-950',
  },
  yuri: {
    name: 'Yuri',
    color: 'border-rose-300',
  },
  music: {
    name: 'Musical',
    color: 'border-cyan-400',
  },
}

export default function PostImageFooter({ genre, study, ranking, fanservice, background }: Props) {
  return (
    <div
      className={`flex w-full flex-col md:flex-row justify-evenly flex-wrap text-left items-center py-1 ${background ? 'dark:bg-slate-800 bg-slate-200' : ''}`}
    >
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
      <span>
        Puntuacion Inicial: <RankingStars ranking={ranking} />
      </span>
      <div className="flex gap-1 items-center">
        Fanservice Rank: {fanservice}
        <div className="cursor-pointer group relative flex justify-center ">
          <svg
            aria-haspopup="true"
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-info-circle"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#A0AEC0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
            <polyline points="11 12 12 12 12 16 13 16" />
          </svg>
          <span className="absolute min-w-[10rem] md:min-w-[20rem] top-10 scale-0 rounded bg-gray-800 p-2 text-xs transition-all text-white group-hover:scale-100">
            No me refiero al comunmente llamado fanservice que se refiere a contenido
            sugerente/ecchi, sino a contener cliches del anime o referencias/homenajes a otros
            animes.
          </span>
        </div>
      </div>
    </div>
  )
}
