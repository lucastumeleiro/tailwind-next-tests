'use client'

import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItems } from './components/TabItems'

function SettingsTabs() {
  const [selectedTab, setSelectedTab] = useState('settings-my-details')

  function isSelectedTab(value: string) {
    return selectedTab === value
  }

  return (
    <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
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
    </Tabs.Root>
  )
}
export { SettingsTabs }
