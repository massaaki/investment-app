import Link from 'next/link';
import * as S from './styles';


type NavItemProps = {
  name: string;
  href: string;
  filled?: boolean;
}


export const NavItem = ({ name, href, filled = false }: NavItemProps) => {
  return (
    <S.Content filled={filled}>
      <Link href={href}>
        <a>
          {name}
        </a>
      </Link>
    </S.Content>
  )
}