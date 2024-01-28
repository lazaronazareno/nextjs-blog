'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <>
      {!loadComments && (
        <button
          className="border border-black rounded-lg p-4 round bg-primary-500 text-black hover:border-primary-600 hover:bg-inherit hover:text-inherit"
          onClick={() => setLoadComments(true)}
        >
          Cargar Comentarios
        </button>
      )}
      {siteMetadata.comments && loadComments && (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      )}
    </>
  )
}
