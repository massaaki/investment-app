import { render } from 'utils/test-utils'

import { Header } from '.'

describe('<Header />', () => {
  it('should', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
