import './index.css'

import LexicalContentEditable from '@lexical/react/LexicalContentEditable'
import type { FC } from 'react'

export const ContentEditable: FC<{ className?: string }> = ({ className }) => {
  return (
    <LexicalContentEditable className={className || 'ContentEditable__root'} />
  )
}
