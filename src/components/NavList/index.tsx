import { NavItem } from 'components/NavItem';
import * as S from './styles';

export const NavList = () => {
  return (
    <S.Container>
      <NavItem href='/' name='home' />
      <NavItem href='/' name='blog' />
      <NavItem href='/' name='about' />
    </S.Container>
  )
}