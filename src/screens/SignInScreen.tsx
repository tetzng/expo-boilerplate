import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from 'native-base'
import React, { useState } from 'react'
import { GestureResponderEvent } from 'react-native'
import { GuestStackScreenProps } from '../types/types'

type SignInInput = { email: string; password: string }

export default function SignInScreen({
  navigation,
}: GuestStackScreenProps<'SignIn'>) {
  const auth = getAuth()
  const [input, setInput] = useState<SignInInput>({
    email: '',
    password: '',
  })
  const signIn = async () => {
    const response = await signInWithEmailAndPassword(
      auth,
      input.email,
      input.password
    )
      .then((userCredential) => {
        const user = userCredential.user
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
    console.log(response)
  }

  return (
    <Center flex={1} px="3">
      <SignInForm
        input={input}
        setInput={setInput}
        navigateSignUp={() => navigation.navigate('SignUp')}
        onPress={signIn}
      />
    </Center>
  )
}

const SignInForm: React.FC<{
  input: SignInInput
  setInput: React.Dispatch<React.SetStateAction<SignInInput>>
  navigateSignUp: (event?: GestureResponderEvent | undefined) => any
  onPress: (event: GestureResponderEvent) => void
}> = ({ input, setInput, navigateSignUp, onPress }) => {
  return (
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}
      >
        Welcome
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: 'warmGray.200',
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Sign in to continue!
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
          <Link
            _text={{
              fontSize: 'xs',
              fontWeight: '500',
              color: 'indigo.500',
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={onPress}>
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
          >
            I'm a new user.{' '}
          </Text>
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            onPress={navigateSignUp}
          >
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  )
}
