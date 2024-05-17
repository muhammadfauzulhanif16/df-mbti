import { ActionIcon } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowUp } from '@tabler/icons-react'

export const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll()
  
  return (
    scroll.y > 10 && (
      <ActionIcon
        size={48}
        pos="fixed"
        bottom={0}
        right={0}
        m={16}
        onClick={() => scrollTo({ y: 0 })}
      >
        <IconArrowUp />
      </ActionIcon>
    )
  )
}
