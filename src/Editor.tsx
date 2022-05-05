import type { FC } from 'react'
import { useRef } from 'react'
import RichTextPlugin from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from './components/ContentEditable'
import { Placeholder } from './components/Placeholder'
import { Toolbar } from './components/Toolbar'

export const Editor: FC = () => {
  const placeholder = <Placeholder>Enter some rich text...</Placeholder>

  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Toolbar />
      <div className="editor-container" ref={scrollRef}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={placeholder}
        />
      </div>
    </>
  )
}
