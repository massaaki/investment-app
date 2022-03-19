import { Meta, Story } from '@storybook/react'
import { BarChart } from '.'
import { data } from './mockData'
export default {
  title: 'BarChart',
  component: BarChart
} as Meta

export const Default: Story = () => {
  return <BarChart data={data} />
}
