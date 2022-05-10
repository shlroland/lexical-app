import type { HistoryState } from '@lexical/react/LexicalHistoryPlugin'
import { createEmptyHistoryState } from '@lexical/react/LexicalHistoryPlugin'
import type { ReactNode } from 'react'
import { createContext, useContext, useMemo } from 'react'

export interface ContextShape {
  historyState: HistoryState
}

const Context = createContext<ContextShape>({
  historyState: { current: null, redoStack: [], undoStack: [] },
})

export const SharedHistoryContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const historyContext = useMemo(
    () => ({ historyState: createEmptyHistoryState() }),
    [],
  )

  return <Context.Provider value={historyContext}>{children}</Context.Provider>
}

export const useSharedHistoryContext = (): ContextShape => {
  return useContext(Context)
}
