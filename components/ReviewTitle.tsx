interface Props {
  title: string
}

export default function ReviewTitle({ title }: Props) {
  return (
    <div className="flex bg-primary-400 items-center justify-center h-8">
      <h3 className="text-lg font-bold !text-black m-0"> {title}</h3>
    </div>
  )
}
