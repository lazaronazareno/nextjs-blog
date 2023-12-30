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
  // eslint-disable-next-line prettier/prettier
  const rank = number === 3 ? 'bg-amber-700' : number === 2 ? 'bg-stone-600' : number === 1 ? 'bg-yellow-600' : null
  return (
    <div
      className={`flex flex-col
      ${rank} ${number === 1 ? 'text-slate-950' : ''} rounded p-1 my-1`}
    >
      <iframe
        src={url}
        title={`YouTube video player ${name}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="min-h-[440px]"
      ></iframe>
      <div className="flex flex-col p-2">
        <p
          className={`text-xl rounded-xl text-center bg-black text-primary-50
            w-10 m-0`}
        >
          #{number}
        </p>
        <span className="text-4xl bg">{name}</span>
        <div className="flex flex-col my-2">
          <span>Cancion: {song}</span>
          <span>Artista: {artist}</span>
        </div>
        <span className={``}>"{description}"</span>
      </div>
    </div>
  )
}
