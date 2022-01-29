import { Box, Heading, HStack, Spinner } from 'native-base'
import React from 'react'

export const Loading = () => {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Box>
  )
}
