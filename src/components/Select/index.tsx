import type { FC, PropsWithChildren } from 'react'

interface SelectProps {
  className: string
  onChange?: (event: { target: { value: string } }) => void
  options: [string, string][]
  value?: string
}

export const Select: FC<PropsWithChildren<SelectProps>> = ({
  onChange,
  className,
  options,
  value,
}) => {
  return (
    <select className={className} onChange={onChange} value={value}>
      {options.map(([option, text]) => (
        <option key={option} value={option}>
          {text}
        </option>
      ))}
    </select>
  )
}
