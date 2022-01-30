import { Story, ComponentMeta } from '@storybook/react'

import { FaWallet as WalletIcon } from 'react-icons/fa'

import { Button, ButtonProps } from '.'

export default {
  title: 'Single/Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
Default.args = {
  children: 'Buy now',
  as: 'button',
  size: 'medium',
  fullWidth: false
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />
WithIcon.args = {
  children: 'Buy now',
  icon: <WalletIcon />,
  as: 'button',
  size: 'medium',
  fullWidth: false
}

export const WithDisabled: Story<ButtonProps> = (args) => <Button {...args} />
WithIcon.args = {
  children: 'Buy now',
  icon: <WalletIcon />,
  as: 'button',
  size: 'medium',
  fullWidth: false,
  disabled: true
}
