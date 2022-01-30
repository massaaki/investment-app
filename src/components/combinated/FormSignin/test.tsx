import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'
import { screen, render } from 'utils/test-utils'

import { FormSignin } from '.'

describe('<FormSignup/>', () => {
  describe('Properties', () => {
    it('should render FormSignin with correct components', () => {
      render(<FormSignin />)

      expect(screen.getByPlaceholderText('email')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
    })
  })

  describe('Behaviours', () => {
    it('should call signupCallback when form submit', async () => {
      const onSubmitFormCallback = jest.fn()
      render(<FormSignin signinCallback={onSubmitFormCallback} />)

      const emailField = screen.getByPlaceholderText('email')
      const passwordField = screen.getByPlaceholderText('password')
      const button = screen.getByRole('button', { name: 'Login' })

      userEvent.type(emailField, 'any-email@email.com')
      userEvent.type(passwordField, 'any-password')
      userEvent.click(button)

      await waitFor(() => {
        expect(onSubmitFormCallback).toHaveBeenCalledWith({
          email: 'any-email@email.com',
          password: 'any-password'
        })
      })
    })
  })
})
