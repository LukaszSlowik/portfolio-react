import React from 'react'
import { createPortal } from 'react-dom'
type Props = {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

const ModalWin = ({ open, children, onClose }: Props) => {
  if (!open) return null
  return createPortal(
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-slate-900/90">
        <div className="fixed left-1/2 top-1/2 z-10  -translate-x-2/4 -translate-y-2/4 rounded-md bg-white p-10 shadow-md">
          <div className="mx-4 my-4 text-xl font-semibold">{children}</div>
          <div className="flex flex-row-reverse">
            <button
              onClick={onClose}
              className="mt-4  rounded-md bg-blue-600 px-4 py-2 hover:bg-blue-700"
            >
              close
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('modal-root') as HTMLElement
  )
}

export default ModalWin
