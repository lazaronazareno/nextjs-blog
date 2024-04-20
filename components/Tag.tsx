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
      className={`rounded-full border px-2 mr-1 bg-black text-xs font-medium uppercase text-primary-500 hover:text-white border-primary-500 
      ${main ? 'border-2 bg-white hover:bg-black border-primary-500 w-fit ' : ''}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
