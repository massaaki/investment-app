import Link from 'next/link';
import * as S from './styles';


type NavItemProps = {
  title: string;
  href: string;
  filled?: boolean;
  onClick?: () => void;
}


export const NavItem = ({ title, href, filled = false, onClick }: NavItemProps) => {
  return (
    <S.Content filled={filled}>
      <Link href={href}>
        <a onClick={onClick}>{title}</a>
      </Link>
    </S.Content>
  )
}
