import { Box, VStack, Image, Input, Button, Flex, Text, } from "@chakra-ui/react";
import React from "react";

const AuthForm = () => {
    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={4}>
                <VStack spacing={3} w={"auto"}>
                    <Image src="/logo.png" h={20} cursor="pointer" alt="instagram" />
                    <Input placeholder="Phone number, username, or email" w={270} fontSize={13} type="email" />
                    <Input placeholder="Password" fontSize={14} type="password" />
                    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={13}>
                        Log in
                    </Button>

                    {/* -----------------------or--------------------- */}

                    <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={2} w={"full"}>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                        <Text mx={1} color="black">
                            OR
                        </Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                    </Flex>

                    <Flex gap={1} flexDirection={"row"} alignItems={"center"} justifyContent={"flex-start"}>
                        <Image src="/facebook-logo.svg" w={5} alt="google logo" />
                        <Text mx={0} px={0} color={"blue.900"} fontSize={14}>
                            Log in with Facebook
                        </Text>
                    </Flex>
                    <Text fontSize={12} color={"blue.900"}>
                        Forgot password?
                    </Text>
                </VStack>
            </Box>
            <Box border={"1px solid gray"} borderRadius={4} padding={5} textAlign={"center"}>
                <Text color={"blue.500"} fontWeight={"bold"}>
                    Create new account
                </Text>
            </Box>
        </>
    );
};

export default AuthForm;
