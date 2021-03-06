import { Text, View, VStack } from 'native-base'
import { useState } from 'react'

import { ICard, IPerson } from '@constants/types'
import { useTranslation } from 'next-export-i18n'
import { useBreakpoint } from '@hooks'

interface IPersonCardProps {
  item: IPerson | ICard
}

const overlayBGColor = `rgba(242, 228, 227, 0.5)`

const PersonCardDesktop = ({ item }: IPersonCardProps) => {
  const { imagePath, name, role } = item

  const { t } = useTranslation()
  const [showInfo, setShowInfo] = useState(false)

  const hasInfo = name && role

  const showInformation = () => setShowInfo(true)
  const hideInformation = () => setShowInfo(false)

  return (
    <View w="100%" h="100%" maxW="316px" maxH="223px" m="10px" flex="1">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 'auto',
          borderRadius: '30px',
          position: 'relative',
        }}
        // // the `as any` come from the fact of Typescript
        // // and the event handlers
        onMouseEnter={(hasInfo && showInformation) as any}
        onMouseLeave={(hasInfo && hideInformation) as any}
        onFocus={(hasInfo && showInformation) as any}
        onBlur={(hasInfo && hideInformation) as any}
      >
        <img
          width="100%"
          height="100%"
          src={imagePath}
          alt={`${name}'s facial`}
        />
        {showInfo && (
          <VStack
            position="absolute"
            alignItems="center"
            justifyContent="flex-end"
            pb="17px"
            h="100%"
            w="100%"
            borderRadius="30px"
            bg={overlayBGColor}
          >
            <Text lineHeight="28px" fontWeight="bold">
              {name}
            </Text>
            <Text lineHeight="28px" fontSize="md">
              {t(role)}
            </Text>
          </VStack>
        )}
      </div>
    </View>
  )
}

const PersonCardMobile = ({ item }: IPersonCardProps) => {
  const { imagePath, name, role } = item
  const { t } = useTranslation()

  const displayName = name && role

  return (
    <VStack
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flex="1"
      margin={{ base: 0, sm: '15px' }}
      px={{ base: '10px', sm: '0' }}
    >
      <View maxW="290px" maxH="204px">
        <img
          width="100%"
          height="100%"
          src={imagePath}
          alt={`${name}'s facial`}
        />
      </View>
      {displayName && (
        <VStack justifyContent="center" alignItems="center" w="100%">
          <Text lineHeight="28px" fontWeight="bold" textAlign="center">
            {name}
          </Text>
          <Text lineHeight="28px" fontSize="md" textAlign="center">
            {t(role)}
          </Text>
        </VStack>
      )}
    </VStack>
  )
}

const PersonCard = (props: IPersonCardProps) => {
  const { isDesktop } = useBreakpoint()

  return isDesktop ? (
    <PersonCardDesktop {...props} />
  ) : (
    <PersonCardMobile {...props} />
  )
}

export default PersonCard
