import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Personality = (props) => {
  return (
    <AppLayout
      meta={props.meta}
      title="MBTI"
      authed={props.auth.user}
    >
      <h1>MBTI</h1>
    </AppLayout>
  )
}

export default Personality
