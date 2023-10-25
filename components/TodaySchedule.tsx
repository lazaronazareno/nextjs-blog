const SEASONAL_SCHEDULE = [
  {
    day: 'Lunes',
    schedule: ['Watashi no Oshi wa Akuyaku Reijou.'],
  },
  {
    day: 'Martes',
    schedule: ['Tokyo Revengers', 'Helck'],
  },
  {
    day: 'Miercoles',
    schedule: ['Kage no Jitsuryokusha ni Naritakute! 2', '16bit Sensation: Another Layer'],
  },
  {
    day: 'Jueves',
    schedule: ['Dr. Stone: New World 2', 'Jujutsu Kaisen 2', 'Rurouni Kenshin (2023)'],
  },
  {
    day: 'Viernes',
    schedule: [
      'Tate no Yuusha no Nariagari 3',
      'Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi',
      'Sousou no Frieren',
      'Hametsu no Oukoku',
      'Undead Unluck',
      'Kanojo mo Kanojo 2',
    ],
  },
  {
    day: 'Sabado',
    schedule: [
      'Saihate no Paladin: Tetsusabi no Yama no Ou',
      'Ragna Crimson',
      'Spy x Family 2',
      'One Piece',
    ],
  },
  {
    day: 'Domingo',
    schedule: [
      'Captain Tsubasa 2',
      'Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su',
      'Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo',
      'Zom 100: Zombie ni Naru made ni Shitai 100 no Koto',
    ],
  },
]

export default function TodaySchedule() {
  const today = new Date().getDay()

  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
  const todayName = daysOfWeek[today]

  const todayAnimes = SEASONAL_SCHEDULE.find((daySchedule) => daySchedule.day === todayName)

  return (
    <div className="flex flex-col p-2 gap-4 h-full">
      <h2 className="text-lg font-bold">Programacion {todayName}</h2>
      {todayAnimes && todayAnimes.schedule.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {todayAnimes.schedule.map((anime) => (
            <li key={anime} className="text-xs lg:text-base border-b-2 border-black">
              ⭐ {anime}
            </li>
          ))}
        </ul>
      ) : (
        <span>No hay animes hoy.</span>
      )}
    </div>
  )
}
