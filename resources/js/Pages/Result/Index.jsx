import { AppLayout } from '@/Layouts/AppLayout'
import { Box, Center, Flex, Group, Title } from '@mantine/core'

export const Index = (props) => {
    console.log(props)
	return (
		<AppLayout
			title="Hasil"
			activeNav="Hasil"
			authed={props.auth.user}
			meta={props.meta}
		>
			<Flex p={32} justify="center" align="center" direction="column">
				<Title mb={32}>ENTJ</Title>

                <Box>
                    <Title>
                        bagaimana
                    </Title>

                    <Group></Group>
                </Box>
			</Flex>
		</AppLayout>
	)
}

export default Index
