import { useState } from 'react'
import { Button, Text, View, HStack } from 'native-base'
import { useTranslation } from 'react-i18next'
import { useWallet } from '@hooks'
import { keys } from '@i18n'

import MetamaskIcon from '@components/atoms/Icons/Metamask'

const CheckConnection = () => {
  const { t } = useTranslation()
  const [isEthereumProviderError, setEthereumProviderError] = useState(false)
  const [isHover, updateHover] = useState(false)
  const hoverStart = () => updateHover(true)
  const hoverEnd = () => updateHover(false)

  const { activate, errorIsNoEthereumProviderError } = useWallet()

  const onActivateError = (error: Error) => {
    if (errorIsNoEthereumProviderError(error)) {
      setEthereumProviderError(true)
    }
  }

  const handleConnectWallet = () => {
    activate(onActivateError)
  }

  return (
    <View
      mt={{
        base: 10,
        sm: 10,
        lg: 10,
        xl: 20,
      }}
      display="flex"
      alignItems="center"
    >
      <Button
        onPress={handleConnectWallet}
        padding={6}
        backgroundColor={isHover ? 'greenColor.900' : 'white'}
        borderColor="greenColor.900"
        borderWidth={1}
        onHoverIn={hoverStart}
        onHoverOut={hoverEnd}
        onTouchStart={hoverStart}
        onTouchEnd={hoverEnd}
      >
        <HStack w="100%" space={3}>
          <MetamaskIcon />
          <Text color={isHover ? 'white' : 'greenColor.900'} fontSize="lg" bold>
            {t(keys.donate.metamask)}
          </Text>
        </HStack>
      </Button>
      <Text
        maxW={{
          base: '80%',
          sm: '100%',
          lg: '100%',
          xl: '100%',
        }}
        mt={5}
        textAlign="center"
        fontSize={{
          base: 'sm',
          sm: 'sm',
          lg: 'sm',
          xl: 'xl',
        }}
      >
        {isEthereumProviderError ? t(keys.donate.pleaseInstallMetamask) : t(keys.donate.invalidNetworkDescription)}
      </Text>
    </View>
  )
}

export default CheckConnection
