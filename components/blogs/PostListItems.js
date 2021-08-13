import NextLink from 'next/link';
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Box,
    Link
} from '@chakra-ui/react';

const PostListItem = () => {
  const {colorMode} = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <NextLink href="/blogs" passHref>
      <Link w="100%" >
        <Box mb={7} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Flex flexDirection="column" align="flex-start" justifyContent="start" width="100%">
              <Heading size="sm" as="h3" mb={1} fontWeight="medium">
                Example title blog
              </Heading>
            </Flex>

            <Text
              color="gray.500"
              minWidth="105px"
              textAlign={['left', 'right']}
              mb={[4, 0]}
            >
              122 Views
            </Text>
          </Flex>

          <Text color={secondaryTextColor[colorMode]}>Learn what useEffect is learn how to use useEffect in Next.JS.</Text>
        </Box>
      </Link>
    </NextLink>
  )
}

export default PostListItem;