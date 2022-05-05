import type { FC } from 'react'
import { IS_APPLE } from '@/utils/environment'

export const Toolbar: FC = () => {
  return (
    <div className="toolbar">
      <button
        title={IS_APPLE ? 'Undo (⌘Z)' : 'Undo (Ctrl+Z)'}
        className="toolbar-item spaced"
        aria-label="Undo"
      >
        <i className="format undo" />
      </button>
    </div>
  )
}
