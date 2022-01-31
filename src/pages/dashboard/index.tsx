import AuthenticatedRoute from 'components/utils/AuthenticatedRoute'
import { DashboardTemplate } from 'templates/Dashboard'

export default function DashboardPage() {
  return (
    <AuthenticatedRoute>
      <DashboardTemplate />
    </AuthenticatedRoute>
  )
}
