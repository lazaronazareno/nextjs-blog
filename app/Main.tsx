import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
/* import NewsletterForm from 'pliny/ui/NewsletterForm' */
import TodaySchedule from '@/components/TodaySchedule'

const MAX_DISPLAY = 2

export default function Home({ posts }) {
  const mainPost = posts[0]
  const secondaryPost = posts[1]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex gap-2 items-baseline space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Ultimas publicaciones
          </h1>
          <Link
            key={'Blogs'}
            href={'/blog'}
            className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Ver todas &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-8 md:grid-rows-6 gap-2 !border-t-0">
          <div className="col-span-8 row-span-4 md:col-span-6 md:row-span-6">
            {mainPost ? (
              <div
                className="relative rounded bg-contain bg-clip-content h-full min-h-[40vh] md:min-h-[65vh] bg-repeat-round"
                style={{ backgroundImage: `url(${mainPost.images[0]})` }}
              >
                <h2 className="absolute top-4 right-4 text-xl rounded bg-white w-fit text-black p-2 font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${mainPost.slug}`}>{mainPost.title}</Link>
                </h2>
                <div className="absolute bottom-4 left-2 flex flex-col gap-1">
                  <div className="flex flex-wrap gap-1 w-min">
                    {mainPost.tags.map((tag) => (
                      <Tag main key={tag} text={tag} />
                    ))}
                  </div>
                  <div className="rounded-full bg-white w-fit text-black px-2 text-base font-medium leading-6 dark:text-black">
                    <time dateTime={mainPost.date}>
                      {formatDate(mainPost.date, siteMetadata.locale)}
                    </time>
                  </div>
                </div>
                <Link
                  href={`/blog/${mainPost.slug}`}
                  aria-label={`Leer "${mainPost.title}"`}
                  className="absolute right-4 bottom-4 bg-white rounded-full p-1 hover:animate-pulse text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </Link>
              </div>
            ) : (
              <div className="relative rounded bg-contain bg-clip-content h-full min-h-[40vh] md:min-h-[65vh] bg-repeat-round">
                Aun no hay un post disponible
              </div>
            )}
          </div>
          <div className="col-span-4 row-span-2 row-start-5 md:col-span-2 md:row-span-3 md:col-start-7">
            {secondaryPost ? (
              <div
                className="flex flex-col justify-center gap-4 bg-sky-800 h-full rounded"
                style={{
                  backgroundImage: `url(${secondaryPost.images[0]})`,
                  backgroundSize: 'cover',
                }}
              >
                <div className="rounded-full bg-white w-fit text-black px-2 text-base font-medium leading-6 dark:text-black">
                  <time dateTime={secondaryPost.date}>
                    {formatDate(secondaryPost.date, siteMetadata.locale)}
                  </time>
                </div>
                <div className="flex flex-wrap gap-1 bg-black w-fit ">
                  {secondaryPost.tags.map((tag) => (
                    <Tag main={false} key={tag} text={tag} />
                  ))}
                </div>
                <h2 className="text-lg bg-black w-fit text-black p-2 font-bold leading-8 tracking-tight">
                  <Link
                    href={`/blog/${secondaryPost.slug}`}
                    className="text-gray-100 dark:text-gray-100"
                  >
                    {secondaryPost.title}
                  </Link>
                </h2>
                <Link
                  href={`/blog/${secondaryPost.slug}`}
                  className="self-end rounded-full border bg-orange-500 border-black py-2 px-4 me-2 hover:scale-105 text-black hover:text-gray-100 hover:border-white"
                >
                  Ver más &rarr;
                </Link>
              </div>
            ) : (
              <div className="flex flex-col justify-center gap-4 bg-sky-800 h-full rounded">
                Publicidad
              </div>
            )}
          </div>
          <div className="col-span-4 row-span-2 col-start-5 row-start-5 md:col-span-2 md:row-span-3 md:col-start-7 md:row-start-4 rounded bg-primary-300 text-black">
            <TodaySchedule />
          </div>
        </div>
      </div>

      {/*       {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}

      {/*       {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
