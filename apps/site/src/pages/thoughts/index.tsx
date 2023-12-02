import { Box, Heading, Text } from '@chakra-ui/react'
import { PageWrapper } from '../../components/site/PageWrapper'
import { SiteLayout } from '../../components/layouts'

const ThoughtsIndexPage = () => (
  <PageWrapper>
    <Heading
      as="h1"
      fontSize={{ base: '6xl', md: '12xl' }}
      fontWeight="medium"
      lineHeight="none"
    >
      Thoughts
    </Heading>
    <Box mt={16}>
      <Text fontSize="2xl" maxW="container.md"></Text>
    </Box>
  </PageWrapper>
)

ThoughtsIndexPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default ThoughtsIndexPage
