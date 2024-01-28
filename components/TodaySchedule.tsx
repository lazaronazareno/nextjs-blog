'use client'
import { useEffect, useState } from 'react'
import { SEASONAL_SCHEDULE } from './SEASONAL_SCHEDULE'

export default function TodaySchedule() {
  const [today, setToday] = useState<Date>(new Date())
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

  useEffect(() => {
    const tempToday = new Date()
    setToday(tempToday)
  }, [])

  const todayName = daysOfWeek[today.getDay()]

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
