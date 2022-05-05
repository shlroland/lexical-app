import type { FC, PropsWithChildren } from 'react'
import './index.css'

export const Placeholder: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return <div className={className || 'Placeholder__root'}>{children}</div>
}
