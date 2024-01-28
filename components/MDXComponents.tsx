import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import PostImageFooter from './PostImageFooter'
import TablePost from './TablePost'
import ReviewTitle from './ReviewTitle'
import ReviewStars from './ReviewStars'
import ReviewImageFooter from './ReviewImageFooter'
import NormalOpeningCard from './NormalOpeningCard'
import BestOpeningCard from './BestOpeningCard'
import Spoiler from './Spoiler'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
  PostImageFooter,
  TablePost,
  ReviewTitle,
  ReviewStars,
  ReviewImageFooter,
  NormalOpeningCard,
  BestOpeningCard,
  Spoiler,
}
