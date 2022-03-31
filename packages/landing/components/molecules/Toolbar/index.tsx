import { Divider, HStack } from 'native-base'

import { Images, NavigationTools, LanguageSelect } from '@components/atoms'

const Toolbar = () => (
  <HStack
    justifyContent="space-between"
    alignItems="center"
    mt="34px"
    maxH="50px"
    w="100%"
    pr="4"
    pl="80px"
  >
    <Images.Logo width="84px" height="84px" />
    <NavigationTools />
    <Divider mx="20px" bg="general.200" orientation="vertical" height="30px" />
    <LanguageSelect />
  </HStack>
)

export default Toolbar