import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Guide = (props) => {
  return (
    <AppLayout
      meta={props.meta}
      title="Panduan"
      authed={props.auth.user}
    >
      <h1>Panduan</h1>
    </AppLayout>
  )
}

export default Guide
