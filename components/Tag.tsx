type Props = {
  variant?: "category" | "label"
  text: string
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const variantStyles = {
  category: "px-4 py-1 hover:cursor-pointer hover:shadow-slate-400",
  label: "px-[6px] py-[2px] text-sm",
}

export function Tag({
  variant = "category",
  text,
  className,
  onClick,
  ...props
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`${className} ${variantStyles[variant]} text-base-darkpurple rounded-sm shadow-sm`}
      {...props}
    >
      {text}
    </div>
  )
}
