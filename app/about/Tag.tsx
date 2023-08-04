type Props = {
  text: string
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export function Tag({ text, className, onClick, ...props }: Props) {
  return (
    <div
      onClick={onClick}
      className={`${className} px-4 py-1 text-base-darkpurple hover:cursor-pointer rounded-sm shadow-sm hover:shadow-slate-400`}
      {...props}
    >
      {text}
    </div>
  )
}
