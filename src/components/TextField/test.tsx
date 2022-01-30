import { render } from 'utils/test-utils'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { FaUserAlt as UserIcon } from 'react-icons/fa'

import { TextField } from '.'

describe('Component: <TextField />', () => {
  describe('Properties', () => {
    it('should render with label', () => {
      render(<TextField label="any-label" name="label-name" />)

      expect(screen.getByLabelText('any-label')).toBeInTheDocument()
    })

    it('should render without label', () => {
      render(<TextField />)

      expect(screen.queryByLabelText('label')).not.toBeInTheDocument()
    })

    it('should render with placeholder', () => {
      render(<TextField placeholder="any-placeholder" />)

      expect(screen.getByPlaceholderText('any-placeholder')).toBeInTheDocument()
    })

    it('should render with icon', () => {
      render(<TextField icon={<UserIcon data-testid="icon-test" />} />)

      expect(screen.getByTestId('icon-test')).toBeInTheDocument()
    })

    it('should render with error message', () => {
      render(<TextField error="any-error-message" />)

      expect(screen.getByText('any-error-message')).toBeInTheDocument()
    })
  })

  describe('Behaviors', () => {
    it('should change values when typing', async () => {
      const onTyping = jest.fn()

      render(
        <TextField
          onInputChange={onTyping}
          label="any-textfield"
          name="any-textfield"
        />
      )
      const input = screen.getByRole('textbox')
      const text = 'hello world'
      userEvent.type(input, text)
      await waitFor(() => {
        expect(input).toHaveValue(text)
        expect(onTyping).toHaveBeenCalledTimes(text.length)
      })
      expect(onTyping).toHaveBeenCalledWith(text)
    })

    it('Does not changes its value when disabled', async () => {
      const onInput = jest.fn()
      render(
        <TextField
          onInputChange={onInput}
          label="any-textfield"
          name="any-textfield"
          disabled
        />
      )
      const input = screen.getByRole('textbox')
      const text = 'hello world'
      userEvent.type(input, text)

      await waitFor(() => {
        expect(input).not.toHaveValue(text)
      })

      expect(onInput).not.toHaveBeenCalled()
    })
  })
})
