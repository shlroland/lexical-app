import type { FC, PropsWithChildren } from 'react'
import { DropDown } from '../DropDown'

export const BlockFormatDropDown: FC<PropsWithChildren<{}>> = () => {
  return (
    <DropDown
      buttonClassName="toolbar-item block-controls"
      buttonIconClassName={'icon block-type '}
      buttonAriaLabel="Formatting options for text style"
    >
      <button className="item">
        <span className="icon paragraph" />
        <span className="text">Normal</span>
      </button>
      <button className="item">
        <span className="icon h1" />
        <span className="text">Heading 1</span>
      </button>
      <button className="item">
        <span className="icon h2" />
        <span className="text">Heading 2</span>
      </button>
      <button className="item">
        <span className="icon h3" />
        <span className="text">Heading 3</span>
      </button>
      <button className="item">
        <span className="icon bullet-list" />
        <span className="text">Bullet List</span>
      </button>
      <button className="item">
        <span className="icon numbered-list" />
        <span className="text">Numbered List</span>
      </button>
      <button className="item">
        <span className="icon quote" />
        <span className="text">Quote</span>
      </button>
      <button className="item">
        <span className="icon code" />
        <span className="text">Code Block</span>
      </button>
    </DropDown>
  )
}
