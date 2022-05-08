import type { FC, PropsWithChildren } from 'react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface DropDownProps {
  buttonAriaLabel?: string
  buttonClassName: string
  buttonIconClassName?: string
  buttonLabel?: string
}

export const DropDown: FC<PropsWithChildren<DropDownProps>> = ({
  buttonLabel,
  buttonAriaLabel,
  buttonClassName,
  buttonIconClassName,
  children,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const dropDownRef = useRef<HTMLDivElement | null>(null)
  const [showDropDown, setShowDropDown] = useState(false)

  useEffect(() => {
    const button = buttonRef.current
    const dropDown = dropDownRef.current

    if (showDropDown && button !== null && dropDown !== null) {
      const { top, left } = button.getBoundingClientRect()
      dropDown.style.top = `${top + 40}px`
      dropDown.style.left = `${Math.min(
        left,
        window.innerWidth - dropDown.offsetWidth - 20,
      )}px`
    }
  }, [showDropDown])

  useEffect(() => {
    const button = buttonRef.current

    if (button !== null && showDropDown) {
      const handle = (event: MouseEvent) => {
        const target = event.target
        if (target instanceof Node && !button.contains(target)) {
          setShowDropDown(false)
        }
      }
      document.addEventListener('click', handle)

      return () => {
        document.removeEventListener('click', handle)
      }
    }
  }, [showDropDown])

  return (
    <>
      <button
        ref={buttonRef}
        aria-label={buttonAriaLabel || buttonLabel}
        className={buttonClassName}
      >
        {buttonIconClassName && <span className={buttonIconClassName} />}
        {buttonLabel && (
          <span className="text dropdown-button-text">{buttonLabel}</span>
        )}
        <i className="chevron-down" />
      </button>

      {showDropDown &&
        createPortal(
          <div className="dropdown" ref={dropDownRef}>
            {children}
          </div>,
          document.body,
        )}
    </>
  )
}
