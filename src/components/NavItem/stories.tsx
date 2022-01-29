import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NavItem } from '.'

export default {
  title: 'NavItem',
  component: NavItem,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof NavItem>

export const Default: ComponentStory<typeof NavItem> = (args) => {
  return <NavItem {...args} />
}
