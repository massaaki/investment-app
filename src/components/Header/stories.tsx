import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Header } from '.'

export default {
  title: 'Header',
  component: Header,

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof Header>

export const Primary: ComponentStory<typeof Header> = () => <Header />