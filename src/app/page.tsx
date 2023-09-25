import { FileInput } from '@/components/FileInput'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { SelectItem } from '@/components/Select/SelectItem'
import { SettingsTabs } from '@/components/SettingsTabs'
import { TextArea } from '@/components/TextArea'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update you photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="id-settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <form
        id="id-settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid-cols-form grid gap-3">
          <label
            htmlFor="id-firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="id-firstName" defaultValue="Diego" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Fernandes" />
            </Input.Root>
          </div>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="id-email"
            className="text-sm font-medium text-zinc-700"
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
              defaultValue="diego@rocketseat.com.br"
            />
          </Input.Root>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="id-photo"
            className="text-sm font-medium text-zinc-700"
          >
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>

          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="id-role"
            className="text-sm font-medium text-zinc-700"
          >
            Role
          </label>
          <Input.Root>
            <Input.Control id="id-role" defaultValue="CTO" />
          </Input.Root>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="id-country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <Select placeholder="Select a country...">
            <SelectItem value="br" text="Brazil" />
            <SelectItem value="us" text="United States" />
          </Select>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="id-timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <Select placeholder="Select a country...">
            <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
            <SelectItem value="utc3" text="America - São Paulo (UTC-03:00)" />
          </Select>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label htmlFor="id-bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Select placeholder="" defaultValue="normal">
                <SelectItem value="normal" text="Normal text" />
                <SelectItem value="md" text="Markdown" />
              </Select>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-100"
                >
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-100"
                >
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-100"
                >
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-100"
                >
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-100"
                >
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </button>
              </div>
            </div>

            <TextArea
              id="id-bio"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </div>
        </div>

        <div className="grid-cols-form grid gap-3 pt-5">
          <label
            htmlFor="id-projects"
            className="text-sm font-medium text-zinc-700"
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
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </form>
    </>
  )
}
