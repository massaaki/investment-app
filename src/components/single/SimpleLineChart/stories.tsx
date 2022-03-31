import { Meta, Story } from '@storybook/react'

import { SimpleLineChart } from '.'

import { data } from './mockData'

export default {
  title: 'SimpleLineChart',
  component: SimpleLineChart
} as Meta

export const Default: Story = () => <SimpleLineChart data={data} />
