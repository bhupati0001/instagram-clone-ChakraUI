import { Box, VStack, Image, Input, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const AuthForm = () => {
    return (
        <>
            <Box border={'1px solid gray'} borderRadius={4} padding={5}>
                <VStack spacing={4} w={'fit-content'}>
                    <Image src='/logo.png' h={24} cursor='pointer' alt='instagram' />
                    <Input placeholder='Phone number, username, or email' w={300} fontSize={14} type='email' />
                    <Input placeholder='Password' fontSize={14} type='password' />
                    <Button w={"full"} colorScheme='blue' size={'sm'} fontSize={14}>Log in</Button>
                    <Flex alignItems={'center'} justifyContent={"center"} my={4} gap={2} w={'full'}>
                        <Box flex={2} h={"1px"} bg={'gray.400'} />
                        <Text mx={1} color='black'>OR</Text>
                        <Box flex={2} h={"1px"} bg={'gray.400'} />
                    </Flex>
                    <Flex gap={5} flexDirection={'column'} justifyContent={"flex-start"}>

                    </Flex>
                </VStack>

            </Box >
        </>
    )
}

export default AuthForm