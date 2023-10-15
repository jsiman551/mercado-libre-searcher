import { RefObject, useEffect } from 'react'

const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void,
) => {
  const handleClick = (e: { target: Node | null }) => {
    if (ref.current && !ref.current.contains(e?.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', (e: MouseEvent) => {
      handleClick({ target: e.target as Node | null })
    })

    return () => {
      document.removeEventListener('click', (e: MouseEvent) => {
        handleClick({ target: e.target as Node | null })
      })
    }
  })
}

export default useOutsideClick
