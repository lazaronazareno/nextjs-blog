'use client'
import { FormEventHandler, useCallback, useState } from 'react'

const NewsletterForm: React.FC<
  React.PropsWithChildren<{
    formId: string
  }>
> = ({ formId, children }) => {
  const name = 'email'
  const [success, setSuccess] = useState<boolean | undefined>()
  const [serverError, setServerError] = useState<string | null>(null)

  const onSubmit: FormEventHandler = useCallback(async (event) => {
    event.preventDefault()
    setServerError(null)

    const target = event.target as HTMLFormElement
    const data = new FormData(target)
    const email = data.get(name)

    const body = JSON.stringify({
      email,
    })

    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
    })

    try {
      await fetch(`/api/newsletter`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers,
        body,
      })
      /* await subscribeToForm(body) */

      setSuccess(true)
    } catch (error) {
      console.error(error)
      setServerError('There was an error subscribing.')
    }
  }, [])

  if (success === false) {
    return <p>Un error ha ocurrido.</p>
  }

  if (success) {
    return (
      <div className="text-center">
        <p>¡Te has suscripto correctamente! </p>
        <small> Te llegará un mail de confirmacion (Revisa tu spam si no lo encuentras.)</small>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <p className={'mb-2 text-center text-sm md:text-xs'}>
        Introduce tu mail para recibir las ultimas novedades.
      </p>
      <form
        target="_blank"
        className={`space-around flex w-full flex-grow justify-center gap-2`}
        onSubmit={onSubmit}
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name={name}
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />

        <button className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
          {children ?? 'Unirse'}
        </button>
      </form>
    </div>
  )
}

export default NewsletterForm
