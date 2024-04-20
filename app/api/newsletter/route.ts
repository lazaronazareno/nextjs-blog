import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.CONVERTKIT_API_KEY
const BASE_URL = 'https://api.convertkit.com/v3'

/* export async function subscribeToForm(params: { formId: string; email: string }) {
  const url = [BASE_URL, `forms`, params.formId, 'subscribe'].join('/')

  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
  })

  const body = {
    api_key: API_KEY,
    email: params.email,
  }

  console.log(body)

  try {
    await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })

    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false }
  }
} */

/* async function subscribe(req: Request, res: NextResponse) {
  try {
    const { formId, email } = await req.json()

    const url = [BASE_URL, `forms`, formId, 'subscribe'].join('/')

    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
    })

    const body = {
      api_key: API_KEY,
      email: email,
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })

    return NextResponse.json({ message: 'Success', response }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}

export { subscribe as POST }
 */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function subscribe(req: Request, res: NextResponse) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ message: 'No email address provided' }, { status: 400 })
  }

  const api_key = process.env.CONVERTKIT_API_KEY
  const formId = process.env.CONVERTKIT_FORM_ID
  const tagId = process.env.CONVERTKIT_TAG_ID

  if (!api_key || !formId) {
    // Don't tell people about internal server errors
    return NextResponse.json({ status: 500 })
  }

  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`
  const tags = [tagId]

  try {
    const body = JSON.stringify({ api_key, email, tags })

    // POST a request to the ConvertKit endpoint
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body,
      redirect: 'follow',
    })

    // Send a non-descriptive success response
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (e) {
    // Don't tell people about internal server errors
    return NextResponse.json({ message: 'Error', e }, { status: 500 })
  }
}

export { subscribe as POST }
