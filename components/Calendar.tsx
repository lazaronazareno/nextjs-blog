import React from 'react'

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

export default function Calendar() {
  return (
    <div>
      <div className="flex flex-wrap gap-y-10 gap-x-4">
        {SEASONAL_SCHEDULE.map((schedule) => (
          <div className="w-96 sm:w-56" key={schedule.day}>
            <h3
              className="px-2 text-lg border-b bg-primary-300 text-black font-bold border-primary-500"
              key={schedule.day}
            >
              {schedule.day}
            </h3>
            <div className="flex flex-col gap-4 bg-sky-700 h-full p-2">
              {schedule.schedule.map((anime) => (
                <span className="block" key={anime}>
                  ⭐ {anime}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
