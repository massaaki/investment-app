import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NavItem } from '.'

export default {
  title: 'Single/NavItem',
  component: NavItem,
  args: {
    title: 'Some title here',
    filled: true,
    href: '/'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof NavItem>

export const Default: ComponentStory<typeof NavItem> = (args) => {
  return <NavItem {...args} />
}
