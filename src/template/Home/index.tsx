import { useQueryUsers } from 'graphql/queries/users/load-users';
// import { MUTATION_CREATE_USER } from 'graphql/mutations/users/create-user';
// import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useEffect } from 'react';

import * as S from './styles';

export const Home = () => {
  const { data } = useQueryUsers()
  // const [signUp] = useMutation(MUTATION_CREATE_USER);


  // const addUser = async () => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const response = await signUp({
  //     variables: {
  //       name: 'any_name-frontend',
  //       email: 'any_name-frontned@email.com',
  //       password: '123456',
  //     }
  //   })

  //   console.log('response..:', response);
  // }

  useEffect(() => {
    if (data) {
      console.log(data.sayHello);
    }

  }, [data]);

  return (
    <S.Container>
      <S.Content>
        <S.Hero>
          <h1>A data driven Investment platform</h1>
          <div>
            <Link href="/">
              <a>
                Getting started
              </a>
            </Link>
          </div>
        </S.Hero>
      </S.Content>
    </S.Container>
  )
}
