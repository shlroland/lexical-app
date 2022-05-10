import type { FC } from 'react'
import { useRef } from 'react'
import RichTextPlugin from '@lexical/react/LexicalRichTextPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { ContentEditable } from './components/ContentEditable'
import { Placeholder } from './components/Placeholder'
import { Toolbar } from './components/Toolbar'
import { prepopulatedRichText } from './example'
import { useSharedHistoryContext } from './context/SharedHistoryContext'

export const Editor: FC = () => {
  const placeholder = <Placeholder>Enter some rich text...</Placeholder>
  const { historyState } = useSharedHistoryContext()

  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Toolbar />
      <div className="editor-container" ref={scrollRef}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={placeholder}
          initialEditorState={prepopulatedRichText}
        />
        <HistoryPlugin externalHistoryState={historyState} />
      </div>
    </>
  )
}
