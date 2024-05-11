import { AppLayout } from '@/Layouts/AppLayout.jsx'

const User = (props) => {
  return (
    <AppLayout
      meta={props.meta}
      title="Pengguna"
      authed={props.auth.user}
    >
      <h1>User</h1>
    </AppLayout>
  )
}

export default User
