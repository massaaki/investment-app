import OnlyUnauthenticatedRoute from 'components/utils/OnlyUnauthencatedRoute'
import { SignupTemplate } from 'templates/Signup'

export default function SignupPage() {
  return (
    <OnlyUnauthenticatedRoute>
      <SignupTemplate />
    </OnlyUnauthenticatedRoute>
  )
}
