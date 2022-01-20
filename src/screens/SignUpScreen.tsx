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
import { GestureResponderEvent } from 'react-native'

type SignUpInput = {
  email: string
  password: string
  passwordConfirmation: string
}
export default function SignUpScreen({}) {
  const auth = getAuth()
  const [input, setInput] = useState<SignUpInput>({
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  const signUp = async () => {
    const response = await createUserWithEmailAndPassword(
      auth,
      input.email,
      input.password
    )
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
    console.log(response)
  }

  return (
    <Center flex={1} px="3">
      <SignUpForm input={input} setInput={setInput} onPress={signUp} />
    </Center>
  )
}

const SignUpForm: React.FC<{
  input: SignUpInput
  setInput: React.Dispatch<React.SetStateAction<SignUpInput>>
  onPress: (event: GestureResponderEvent) => void
}> = ({ input, setInput, onPress }) => {
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
          <Input
            isRequired
            placeholder="email@example.com"
            onChangeText={(text) => setInput({ ...input, email: text })}
            value={input.email}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            isRequired
            type="password"
            onChangeText={(text) => setInput({ ...input, password: text })}
            value={input.password}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input
            isRequired
            onChangeText={(text) =>
              setInput({ ...input, passwordConfirmation: text })
            }
            value={input.passwordConfirmation}
            type="password"
          />
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={onPress}>
          Sign up
        </Button>
      </VStack>
    </Box>
  )
}
