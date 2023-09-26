import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { Button } from '@/components/Button'
import { formatBytes } from '@/Utils/functions'

const fileItemVariant = tv({
  slots: {
    container: 'group flex items-start gap-4 border border-zinc-200 p-4',
    icon: twMerge(
      'rounded-full border-4 p-2 border-violet-100 bg-violet-200 text-violet-600',
      'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    ),
    deleteButton: '',
  },
  variants: {
    state: {
      progress: {
        container: 'dark:border-zinc-700',
      },
      complete: {
        container: twMerge('border-violet-500', 'dark:border-violet-300/30'),
      },
      error: {
        container: twMerge(
          'bg-error-25 border-error-300',
          'dark:bg-error-500/5 dark:border-error-500/30',
        ),
        icon: twMerge(
          'border-error-50 bg-error-100 text-error-600',
          'dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
        ),
        deleteButton: twMerge(
          'text-error-700 hover:text-error-900',
          'dark:text-error-400 dark:hover:text-error-300',
        ),
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

interface IFileItemProps extends VariantProps<typeof fileItemVariant> {
  name: string
  size: number
}

function FileItem({ name, size, state }: IFileItemProps) {
  const { container, icon, deleteButton } = fileItemVariant({ state })
  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span
              className={twMerge(
                'text-sm font-medium text-error-700',
                'dark:text-error-400',
              )}
            >
              Upload failed, please try again.
            </span>
            <span
              className={twMerge(
                'text-sm font-medium text-error-600',
                'dark:text-error-500',
              )}
            >
              {name}
            </span>
          </div>

          <button
            type="button"
            className={twMerge(
              'text-sm font-semibold text-error-700 hover:text-error-900',
              'dark:text-error-400 dark:hover:text-error-300',
            )}
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-100',
              )}
            >
              {name}
            </span>
            <span
              className={twMerge(
                'text-sm font-medium text-zinc-500',
                'dark:text-zinc-400',
              )}
            >
              {formatBytes(size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className={`h-2 w-[${
                  state === 'complete' ? '100%' : '80%'
                }] rounded-full bg-violet-600`}
              />
            </div>
            <span
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-100',
              )}
            >
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-4 w-4 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}

export { FileItem }
