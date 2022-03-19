import { useState, useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import { AuthContext } from 'contexts/AuthContext'
import { NavItem } from 'components/single/NavItem'

import * as S from './styles'

export const NavList = () => {
  const { user } = useContext(AuthContext)
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
        <NavItem href="/dashboard" title="dashboard" />
        {/* <NavItem href="/about" title="about" /> */}
        {!user && <NavItem href="/signin" title="login" filled />}
        {!!user && <NavItem href="/profile" title="profile" />}
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
          {!user && (
            <NavItem href="/signin" title="login" onClick={handleClose} />
          )}
          {!!user && (
            <NavItem href="/profile" title="profile" onClick={handleClose} />
          )}
          <NavItem href="/" title="home" onClick={handleClose} />

          <NavItem href="/dashboard" title="dashboard" onClick={handleClose} />

          {/* <NavItem href="/about" title="about" onClick={handleClose} /> */}
        </S.NavSubGroup>
      </S.NavGroup>
    </S.Container>
  )
}
