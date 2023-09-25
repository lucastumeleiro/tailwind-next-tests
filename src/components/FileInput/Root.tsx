'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type TFileInputRootProps = ComponentProps<'div'>

type TFileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (file: File[], multiple: boolean) => void
}

const FileInptContext = createContext({} as TFileInputContextType)

function Root(props: TFileInputRootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInptContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInptContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInptContext)
export { Root }
