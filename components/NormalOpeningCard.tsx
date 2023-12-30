interface Props {
  number: number
  name: string
  description: string
  song: string
  artist: string
  url: string
  color: boolean
}

export default function NormalOpeningCard({
  number,
  name,
  description,
  song,
  artist,
  url,
  color,
}: Props) {
  return (
    <div
      className={`flex flex-wrap
      ${color ? 'bg-slate-600' : 'bg-primary-400 text-slate-950'} rounded p-1 my-1`}
    >
      <iframe
        src={url}
        title={`YouTube video player ${name}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="min-h-[240px] min-w-[250px] flex-grow sm:min-w-[320px]"
      ></iframe>
      <div className="flex flex-col p-2 md:w-4/6 flex-grow">
        <p
          className={`text-xl rounded-xl text-center
          ${color ? 'bg-primary-500 text-slate-950' : 'bg-slate-950 text-slate-50'}  w-10 m-0`}
        >
          #{number}
        </p>
        <span className="text-4xl">{name}</span>
        <div className="flex flex-col my-2">
          <span>Cancion: {song}</span>
          <span>Artista: {artist}</span>
        </div>
        <span className={`${color ? 'text-primary-300' : 'text-slate-800'}`}>"{description}"</span>
      </div>
    </div>
  )
}
