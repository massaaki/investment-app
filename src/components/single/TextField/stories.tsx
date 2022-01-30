import { Story, ComponentMeta } from '@storybook/react'
import { TextField, TextFieldProps } from '.'

import { FaUserAlt } from 'react-icons/fa'

export default {
  title: 'Single/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />
const defaultProps: TextFieldProps = {
  label: 'Some label here',
  icon: <FaUserAlt />,
  disabled: false
}
Default.args = defaultProps

export const WithError: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
)
const withErrorProps: TextFieldProps = {
  label: 'Some label here',
  icon: <FaUserAlt />,
  disabled: false,
  error: 'some error here'
}
WithError.args = withErrorProps
