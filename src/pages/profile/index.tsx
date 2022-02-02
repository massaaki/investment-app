import AuthenticatedRoute from 'components/utils/AuthenticatedRoute'

import { ProfileTemplate } from 'templates/Profile'

export default function AboutPage() {
  return (
    <AuthenticatedRoute>
      <ProfileTemplate />
    </AuthenticatedRoute>
  )
}
