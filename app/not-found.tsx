import Image from '@/components/Image'
import Link from '@/components/Link'
import notFound from '@/data/404.webp'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <Image
          alt={'404 not found'}
          src={notFound}
          className="object-cover object-center w-96 h-72"
        />
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          No encontramos la página que estás buscando.
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-primary inline rounded-lg border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-primary-700 focus:outline-none dark:hover:bg-primary-500"
        >
          Regresar al inicio
        </Link>
      </div>
    </div>
  )
}
