import React from 'react'

const SEASONAL_SCHEDULE = [
  {
    day: 'Lunes',
    schedule: ['Tsukimichi'],
  },
  {
    day: 'Martes',
    schedule: ['Akuyaku Reijou Level 99'],
  },
  {
    day: 'Miercoles',
    schedule: ['ClassRoom of the Elite 3', 'Metallic Rouge'],
  },
  {
    day: 'Jueves',
    schedule: ['Dungeon Meshi', 'Majo to Yajuu'],
  },
  {
    day: 'Viernes',
    schedule: [
      'Sasaki To Pii-chan',
      'Chiyu Mahou no Machigatta Tsukaikata',
      'Sousou no Frieren',
      'Undead Unluck',
    ],
  },
  {
    day: 'Sabado',
    schedule: [
      'Yubisaki to Renren',
      'Ragna Crimson',
      'Mashle 2',
      'Bucchigiri?!',
      'Solo Leveling',
      'Boku no Kokoro no Yabai Yatsu 2',
      'Kusuriya no Hitorigoto',
      'One Piece',
    ],
  },
  {
    day: 'Domingo',
    schedule: [
      'Captain Tsubasa 2',
      'Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su',
      'Loop 7-kaime',
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
