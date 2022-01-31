import OnlyUnauthenticatedRoute from 'components/utils/OnlyUnauthencatedRoute'
import { SigninTemplate } from 'templates/Signin'

export default function SignupPage() {
  return (
    <OnlyUnauthenticatedRoute>
      <SigninTemplate />
    </OnlyUnauthenticatedRoute>
  )
}
