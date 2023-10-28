import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const today = getToday()

    return NextResponse.json({ message: today }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to get the current date' }, { status: 500 })
  }
}

function getToday() {
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
  const today = new Date()
  const dayOfWeek = daysOfWeek[today.getDay()]
  return dayOfWeek
}
