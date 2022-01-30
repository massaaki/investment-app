import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NavList } from '.'

export default {
  title: 'NavList',
  component: NavList,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof NavList>

export const Default: ComponentStory<typeof NavList> = (args) => (
  <NavList {...args} />
)
