import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { NavItem } from 'components/NavItem'

import * as S from './styles'
import { useState } from 'react'

export const NavList = () => {
  const [showRefGroup, setShowRefGroup] = useState(false)

  function handleShowRefGroup() {
    setShowRefGroup(!showRefGroup)
  }

  function handleClose() {
    setShowRefGroup(false)
  }

  return (
    <S.Container>
      <S.NavSideBySide>
        <NavItem href="/" title="home" />
        <NavItem href="/" title="blog" />
        <NavItem href="/" title="about" />
        <NavItem href="/" title="login" filled />
      </S.NavSideBySide>

      <S.NavGroup>
        <li onClick={handleShowRefGroup}>
          <GiHamburgerMenu />
        </li>
        <S.NavGroupBackground
          show={showRefGroup}
          onClick={handleShowRefGroup}
        />
        <S.NavSubGroup show={showRefGroup}>
          <S.CloseButton>
            <button onClick={handleShowRefGroup}>
              <GrClose />
            </button>
          </S.CloseButton>
          <NavItem href="/" title="login" onClick={handleClose} />
          <NavItem href="/" title="home" onClick={handleClose} />
          <NavItem href="/" title="blog" onClick={handleClose} />
          <NavItem href="/" title="about" onClick={handleClose} />
        </S.NavSubGroup>
      </S.NavGroup>
    </S.Container>
  )
}
