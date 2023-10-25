import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  main: boolean
  key?: string | number
}

const Tag = ({ text, main }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className={`mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 
      ${main ? 'rounded-full border-2 bg-white hover:bg-black border-primary-500 w-fit px-2' : ''}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
