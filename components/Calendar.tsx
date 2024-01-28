import React from 'react'
import { SEASONAL_SCHEDULE } from './SEASONAL_SCHEDULE'

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
