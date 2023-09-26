import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { Button } from '@/components/Button'
import { FileInput } from '@/components/FileInput'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { SelectItem } from '@/components/Select/components/SelectItem'
import { SettingsTabs } from '@/components/SettingsTabs'
import { TextArea } from '@/components/TextArea'

export default function Home() {
  return (
    <>
      <h1
        className={twMerge(
          'text-3xl font-medium text-zinc-900',
          'dark:text-zinc-100',
        )}
      >
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div
          className={twMerge(
            'flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center',
            'dark:border-zinc-700',
          )}
        >
          <div className="space-y-1">
            <h2
              className={twMerge(
                'text-lg font-medium text-zinc-900',
                'dark:text-zinc-100',
              )}
            >
              Personal Info
            </h2>
            <span
              className={twMerge('text-sm text-zinc-500', 'dark:text-zinc-400')}
            >
              Update you photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="id-settings" variant="primary">
              Save
            </Button>
          </div>
        </div>
      </div>

      <form
        id="id-settings"
        className={twMerge(
          'mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200',
          'dark:divide-zinc-700',
        )}
      >
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
          <label
            htmlFor="id-firstName"
            className={twMerge(
              'text-sm font-medium text-zinc-700',
              'dark:text-zinc-300',
            )}
          >
            Name
          </label>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <Input.Root>
              <Input.Control id="id-firstName" defaultValue="Lucas" />
            </Input.Root>

            <div className="flex flex-col gap-3 lg:block">
              <label
                htmlFor="id-lastName"
                className={twMerge(
                  'text-sm font-medium text-zinc-700 lg:sr-only',
                  'dark:text-zinc-300',
                )}
              >
                Last name
              </label>
              <Input.Root id="id-lastName">
                <Input.Control defaultValue="Tumeleiro" />
              </Input.Root>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="id-email"
            className={twMerge(
              'text-sm font-medium text-zinc-700',
              'dark:text-zinc-300',
            )}
          >
            Email address
          </label>
          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              id="id-email"
              type="email"
              defaultValue="lucasftumeleiro@gmail.com"
            />
          </Input.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="id-photo"
            className={twMerge(
              'text-sm font-medium text-zinc-700',
              'dark:text-zinc-300',
            )}
          >
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>

          <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="id-role"
            className={twMerge(
              'text-sm font-medium text-zinc-700',
              'dark:text-zinc-300',
            )}
          >
            Role
          </label>
          <Input.Root>
            <Input.Control id="id-role" defaultValue="CTO" />
          </Input.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="id-country"
            className={twMerge(
              'text-sm font-medium text-zinc-700',
              'dark:text-zinc-300',
            )}
          >
            Country
          </label>
          <Select placeholder="Select a country...">
            <SelectItem value="br" text="Brazil" />
            <SelectItem value="us" text="United States" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="id-timezone"
            className={twMerge(
              'text-sm font-medium text-zinc-700',
              'dark:text-zinc-300',
            )}
          >
            Timezone
          </label>
          <Select placeholder="Select a country...">
            <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
            <SelectItem value="utc3" text="America - São Paulo (UTC-03:00)" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="id-bio"
            className={twMerge(
              'text-sm font-medium text-zinc-700',
              'dark:text-zinc-300',
            )}
          >
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-3">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
              <Select placeholder="" defaultValue="normal">
                <SelectItem value="normal" text="Normal text" />
                <SelectItem value="md" text="Markdown" />
              </Select>

              <div className="flex items-center gap-1">
                <Button type="button" variant="ghost">
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>

            <TextArea
              id="id-bio"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="id-projects"
            className={twMerge(
              'text-sm font-medium text-zinc-700',
              'dark:text-zinc-300',
            )}
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
          <div />
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </div>
      </form>
    </>
  )
}
