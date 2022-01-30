import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'
import { screen, render } from 'utils/test-utils'

import { FormSignup } from '.'

describe('<FormSignup/>', () => {
  describe('Properties', () => {
    it('should render FormSignup with correct components', () => {
      render(<FormSignup />)

      expect(screen.getByPlaceholderText('name')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('email')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Register' })
      ).toBeInTheDocument()
    })
  })

  describe('Behaviours', () => {
    it('should call signupCallback when form submit', async () => {
      const onSubmitFormCallback = jest.fn()
      render(<FormSignup signupCallback={onSubmitFormCallback} />)

      const nameField = screen.getByPlaceholderText('name')
      const emailField = screen.getByPlaceholderText('email')
      const passwordField = screen.getByPlaceholderText('password')
      const button = screen.getByRole('button', { name: 'Register' })

      userEvent.type(nameField, 'any-name')
      userEvent.type(emailField, 'any-email@email.com')
      userEvent.type(passwordField, 'any-password')
      userEvent.click(button)

      await waitFor(() => {
        expect(onSubmitFormCallback).toHaveBeenCalledWith({
          name: 'any-name',
          email: 'any-email@email.com',
          password: 'any-password'
        })
      })
    })
  })
})
