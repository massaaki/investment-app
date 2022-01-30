import { ComponentMeta, Story } from '@storybook/react'

import { FormSignup, FormSignupProps } from '.'

export default {
  title: 'combinated/FormSignup',
  component: FormSignup,
  argTypes: {
    signupCallback: { action: 'signupCallback called' }
  }
} as ComponentMeta<typeof FormSignup>

export const Default: Story<FormSignupProps> = (args) => (
  <FormSignup {...args} />
)
