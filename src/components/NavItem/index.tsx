import Link from 'next/link';
import * as S from './styles';


type NavItemProps = {
  name: string;
  href: string;
}


export const NavItem = ({ name, href }: NavItemProps) => {
  return (
    <S.Content>
      <Link href={href}>
        <a>
          {name}
        </a>
      </Link>
    </S.Content>
  )
}