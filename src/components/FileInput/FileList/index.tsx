'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useFileInput } from '../Root'
import { FileItem } from './components/FileItem'

function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileItem
            key={`${file.name}_${file.size}`}
            name={file.name}
            size={file.size}
            state="error"
          />
        )
      })}
    </div>
  )
}

export { FileList }
