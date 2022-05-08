import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { Divider } from '../Divider'
import { Select } from '../Select'
import { DropDown } from '../DropDown/index'
import { BlockFormatDropDown } from './BlockFormatDropDown'
import { IS_APPLE } from '@/utils/environment'

const supportedBlockTypes = new Set([
  'paragraph',
  'quote',
  'code',
  'h1',
  'h2',
  'h3',
  'ul',
  'ol',
])

const CODE_LANGUAGE_OPTIONS: [string, string][] = [
  ['', '- Select language -'],
  ['c', 'C'],
  ['clike', 'C-like'],
  ['css', 'CSS'],
  ['html', 'HTML'],
  ['js', 'JavaScript'],
  ['markdown', 'Markdown'],
  ['objc', 'Objective-C'],
  ['plain', 'Plain Text'],
  ['py', 'Python'],
  ['rust', 'Rust'],
  ['sql', 'SQL'],
  ['swift', 'Swift'],
  ['xml', 'XML'],
]

export const Toolbar: FC = () => {
  const [editor] = useLexicalComposerContext()
  const [activeEditor] = useState(editor)

  const [blockType] = useState('paragraph')
  const [codeLanguage] = useState<string>('')
  const [isBold] = useState(false)
  const [isItalic] = useState(false)
  const [isUnderline] = useState(false)
  const [isStrikethrough] = useState(false)
  const [isSubscript] = useState(false)
  const [isSuperscript] = useState(false)
  const [isCode] = useState(false)
  const [isLink] = useState(false)
  const [isRTL] = useState(false)

  const onCodeLanguageSelect = useCallback(() => {}, [])

  return (
    <div className="toolbar">
      <button
        title={IS_APPLE ? 'Undo (⌘Z)' : 'Undo (Ctrl+Z)'}
        className="toolbar-item spaced"
        aria-label="Undo"
      >
        <i className="format undo" />
      </button>
      <button
        title={IS_APPLE ? 'Redo (⌘Y)' : 'Undo (Ctrl+Y)'}
        className="toolbar-item"
        aria-label="Redo"
      >
        <i className="format redo" />
      </button>
      <Divider />
      {supportedBlockTypes.has(blockType) && activeEditor === editor && (
        <>
          <BlockFormatDropDown />
          <Divider />
        </>
      )}
      {blockType === 'code' ? (
        <>
          <Select
            className="toolbar-item code-language"
            options={CODE_LANGUAGE_OPTIONS}
            value={codeLanguage}
            onChange={onCodeLanguageSelect}
          />
          <i className="chevron-down inside" />
        </>
      ) : (
        <>
          <>
            <Select
              className="toolbar-item font-family"
              options={[
                ['Arial', 'Arial'],
                ['Courier New', 'Courier New'],
                ['Georgia', 'Georgia'],
                ['Times New Roman', 'Times New Roman'],
                ['Trebuchet MS', 'Trebuchet MS'],
                ['Verdana', 'Verdana'],
              ]}
            />
            <i className="chevron-down inside" />
          </>
          <>
            <Select
              className="toolbar-item font-size"
              options={[
                ['10px', '10px'],
                ['11px', '11px'],
                ['12px', '12px'],
                ['13px', '13px'],
                ['14px', '14px'],
                ['15px', '15px'],
                ['16px', '16px'],
                ['17px', '17px'],
                ['18px', '18px'],
                ['19px', '19px'],
                ['20px', '20px'],
              ]}
            />
            <i className="chevron-down inside" />
          </>
          <Divider />
          <button
            className={`toolbar-item spaced ${isBold ? 'active' : ''}`}
            title={IS_APPLE ? 'Bold (⌘B)' : 'Bold (Ctrl+B)'}
            aria-label={`Format text as bold. Shortcut: ${
              IS_APPLE ? '⌘B' : 'Ctrl+B'
            }`}
          >
            <i className="format bold" />
          </button>
          <button
            className={`toolbar-item spaced ${isItalic ? 'active' : ''}`}
            title={IS_APPLE ? 'Italic (⌘I)' : 'Italic (Ctrl+I)'}
            aria-label={`Format text as italics. Shortcut: ${
              IS_APPLE ? '⌘I' : 'Ctrl+I'
            }`}
          >
            <i className="format italic" />
          </button>
          <button
            className={`toolbar-item spaced ${isUnderline ? 'active' : ''}`}
            title={IS_APPLE ? 'Underline (⌘U)' : 'Underline (Ctrl+U)'}
            aria-label={`Format text to underlined. Shortcut: ${
              IS_APPLE ? '⌘U' : 'Ctrl+U'
            }`}
          >
            <i className="format underline" />
          </button>
          <button
            className={`toolbar-item spaced ${isCode ? 'active' : ''}`}
            title="Insert code block"
            aria-label="Insert code block"
          >
            <i className="format code" />
          </button>
          <button
            className={`toolbar-item spaced ${isLink ? 'active' : ''}`}
            aria-label="Insert link"
            title="Insert link"
          >
            <i className="format link" />
          </button>

          <DropDown
            buttonClassName="toolbar-item spaced"
            buttonLabel=""
            buttonAriaLabel="Formatting options for additional text styles"
            buttonIconClassName="icon dropdown-more"
          >
            <button
              className={`item ${
                isStrikethrough ? 'active dropdown-item-active' : ''
              }`}
              title="Strikethrough"
              aria-label="Format text with a strikethrough"
            >
              <i className="icon strikethrough" />
              <span className="text">Strikethrough</span>
            </button>
            <button
              className={`item ${
                isSubscript ? 'active dropdown-item-active' : ''
              }`}
              title="Subscript"
              aria-label="Format text with a subscript"
            >
              <i className="icon subscript" />
              <span className="text">Subscript</span>
            </button>
            <button
              className={`item ${
                isSuperscript ? 'active dropdown-item-active' : ''
              }`}
              title="Superscript"
              aria-label="Format text with a superscript"
            >
              <i className="icon superscript" />
              <span className="text">Superscript</span>
            </button>
          </DropDown>
          <Divider />
          <DropDown
            buttonLabel="Align"
            buttonIconClassName="icon left-align"
            buttonClassName="toolbar-item spaced alignment"
            buttonAriaLabel="Formatting options for text alignment"
          >
            <button className="item">
              <i className="icon left-align" />
              <span className="text">Left Align</span>
            </button>
            <button className="item">
              <i className="icon center-align" />
              <span className="text">Center Align</span>
            </button>
            <button className="item">
              <i className="icon right-align" />
              <span className="text">Right Align</span>
            </button>
            <button className="item">
              <i className="icon justify-align" />
              <span className="text">Justify Align</span>
            </button>
            <Divider />
            <button className="item">
              <i className={`icon ${isRTL ? 'indent' : 'outdent'}`} />
              <span className="text">Outdent</span>
            </button>
            <button className="item">
              <i className={`icon ${isRTL ? 'outdent' : 'indent'}`} />
              <span className="text">Indent</span>
            </button>
          </DropDown>
        </>
      )}
    </div>
  )
}
