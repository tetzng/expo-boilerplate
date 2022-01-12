import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from 'native-base'
import React, { useState } from 'react'

export default function SignUpScreen({}) {
  const auth = getAuth()
  const [input, setInput] = useState<{
    email: string
    password: string
    passwordConfirm: string
  }>({
    email: '',
    password: '',
    passwordConfirm: '',
  })
  createUserWithEmailAndPassword(auth, input.email, input.password)
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })

  return (
    <Center flex={1} px="3">
      <SignUpForm />
    </Center>
  )
}

const SignUpForm = () => {
  return (
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading
        size="lg"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}
        fontWeight="semibold"
      >
        Welcome
      </Heading>
      <Heading
        mt="1"
        color="coolGray.600"
        _dark={{
          color: 'warmGray.200',
        }}
        fontWeight="medium"
        size="xs"
      >
        Sign up to continue!
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo">
          Sign up
        </Button>
      </VStack>
    </Box>
  )
}
