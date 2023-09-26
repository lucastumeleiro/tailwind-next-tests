'use client'

import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItems } from './components/TabItems'

function SettingsTabs() {
  const [selectedTab, setSelectedTab] = useState('settings-my-details')

  function isSelectedTab(value: string) {
    return selectedTab === value
  }

  return (
    <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
      <ScrollArea.Root className="w-full" type="auto">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List
            className={twMerge(
              'mt-6 flex w-full items-center gap-4 border-b border-zinc-200',
              'dark:border-zinc-700',
            )}
          >
            <TabItems
              value="settings-my-details"
              title="My details"
              isSelected={isSelectedTab('settings-my-details')}
            />
            <TabItems
              value="settings-profile"
              title="Profile"
              isSelected={isSelectedTab('settings-profile')}
            />
            <TabItems
              value="settings-password"
              title="Password"
              isSelected={isSelectedTab('settings-password')}
            />
            <TabItems
              value="settings-Team"
              title="Team"
              isSelected={isSelectedTab('settings-Team')}
            />
            <TabItems
              value="settings-Plan"
              title="Plan"
              isSelected={isSelectedTab('settings-Plan')}
            />
            <TabItems
              value="settings-Billing"
              title="Billing"
              isSelected={isSelectedTab('settings-Billing')}
            />
            <TabItems
              value="settings-Email"
              title="Email"
              isSelected={isSelectedTab('settings-Email')}
            />
            <TabItems
              value="settings-Notifications"
              title="Notifications"
              isSelected={isSelectedTab('settings-Notifications')}
            />
            <TabItems
              value="settings-Integrations"
              title="Integrations"
              isSelected={isSelectedTab('settings-Integrations')}
            />
            <TabItems
              value="settings-API"
              title="API"
              isSelected={isSelectedTab('settings-API')}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-1.5 translate-y-2.5 touch-none select-none flex-col"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
export { SettingsTabs }
