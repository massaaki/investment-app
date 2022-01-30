import { ComponentMeta, Story } from '@storybook/react'

import { FormSignin, FormSigninProps } from '.'

export default {
  title: 'combinated/FormSignin',
  component: FormSignin,
  argTypes: {
    signinCallback: { action: 'signinCallback called' }
  }
} as ComponentMeta<typeof FormSignin>

export const Default: Story<FormSigninProps> = (args) => (
  <FormSignin {...args} />
)
