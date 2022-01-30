import { render } from 'utils/test-utils'
import { screen } from '@testing-library/react'

import { FaUser as UserIcon } from 'react-icons/fa'

import { Button } from '.'

describe('<Button>', () => {
  describe('Properties', () => {
    it('should render Button with children', () => {
      render(<Button>any-children</Button>)

      expect(screen.getByText('any-children')).toBeInTheDocument()
    })

    it('should render Button with medium size by default', () => {
      render(<Button>any-children</Button>)

      const element = screen.getByRole('button', { name: 'any-children' })

      expect(element).toHaveStyle({
        height: '4rem',
        'font-size': '1.4rem'
      })
    })

    it('should render Button with large size if provided', () => {
      render(<Button size="large">any-children</Button>)

      const element = screen.getByRole('button', { name: 'any-children' })

      expect(element).toHaveStyle({
        height: '5rem',
        'font-size': '1.6rem'
      })
    })

    it('should render Button with fullWidth if provided', () => {
      render(<Button fullWidth>any-children</Button>)
      const element = screen.getByRole('button', { name: 'any-children' })

      expect(element).toHaveStyle({
        width: '100%'
      })
    })

    it('should render Button with icon if provided', () => {
      render(
        <Button icon={<UserIcon data-testid="icon-test-id" />}>
          any-children
        </Button>
      )
      expect(screen.getByTestId('icon-test-id')).toBeInTheDocument()
    })

    it('should render Button disabled if provided', () => {
      render(<Button disabled>any-children</Button>)
      const element = screen.getByRole('button', { name: 'any-children' })

      expect(element).toHaveStyle({
        cursor: 'not-allowed'
      })
      expect(element).toBeDisabled()
    })

    it('should render Button as a Link', () => {
      render(
        <Button as="a" href="/">
          any-children
        </Button>
      )
      expect(
        screen.getByRole('link', { name: 'any-children' })
      ).toBeInTheDocument()
    })
  })

  // describe('Behaviours', () => {

  // })
})
