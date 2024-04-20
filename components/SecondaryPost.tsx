import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import React from 'react'
import Tag from './Tag'
import Link from 'next/link'
import Image from 'next/image'

const SecondaryPost = ({ post, color }) => {
  return (
    <div className="col-span-4 row-span-2 row-start-5 md:col-span-2 md:row-span-3 md:col-start-7">
      {post ? (
        <div
          className={`flex flex-col justify-end gap-2 
          ${color ? 'bg-orange-700' : 'bg-sky-800'} h-full rounded pb-1`}
        >
          <div className="w-fit text-white px-2 text-base font-medium leading-6 dark:text-white">
            <time dateTime={post.date}>{formatDate(post.date, siteMetadata.locale)}</time>
          </div>
          <div className="flex flex-wrap gap-1 w-fit ">
            {post.tags.map((tag) => (
              <Tag main={false} key={tag} text={tag} />
            ))}
          </div>
          <Link href={`/blog/${post.slug}`}>
            <Image
              title={post.title}
              src={post.images[0]}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-full object-fill"
            />
          </Link>

          <h2 className="text-lg w-fit p-2 underline underline-offset-1 font-bold leading-8 tracking-tight">
            <Link
              href={`/blog/${post.slug}`}
              className="flex w-full text-gray-100 dark:text-gray-100"
            >
              {post.title}
            </Link>
          </h2>
          <Link
            href={`/blog/${post.slug}`}
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
  )
}

export default SecondaryPost
