import {
    Box,
    Button,
    Container,
    HStack,
    Heading,
    PinInput,
    PinInputField,
    Stack,
    Text
} from '@chakra-ui/react';
import React from 'react'
import OtpSvg from '../Components/OtpSvg';
import { useNavigate } from 'react-router-dom';

const Otp = ({ otp, setOtp, handleOtpVerification }) => {
    const navigate = useNavigate();
    return (
        <Container
            display={'grid'}
            placeItems={'center'}
        >
            <Box my='9'>
                <OtpSvg />
            </Box>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 8 }}
            >
                <Heading
                    fontWeight={400}
                    fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                    lineHeight={'110%'}>
                    Please verify Mobile number
                </Heading>
                <Text
                    color={'gray.500'}
                    maxW={'3xl'}
                    fontSize={'16px'}
                >
                    An OTP is sent to +917896781234 <br />
                    <Text
                        as={'span'}
                        color={'orange'}
                        fontSize={'14px'}
                        textDecoration={'underline'}
                        cursor={'pointer'}
                        onClick={() => navigate('/')}
                    >
                        Change Phone Number
                    </Text>
                </Text>
                <HStack my={10} colorScheme='orange'>
                    <PinInput
                        type='number'
                        value={otp}
                        onChange={(otp) => setOtp(otp)}
                    >
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
                <Text
                    color={'gray.500'}
                    maxW={'3xl'}
                    fontSize={'16px'}
                >
                    Didn't receive the code?  {" "}
                    <Text
                        fontSize={'14px'}
                        as={'span'}
                        color={'orange'}
                        cursor={'pointer'}
                    >
                        Resend
                    </Text>
                </Text>
                <Button
                    rounded={'full'}
                    px={16}
                    colorScheme={'orange'}
                    bg={'#f7b348'}
                    _hover={{ bg: 'orange.300' }}
                    onClick={handleOtpVerification}
                >
                    Verify
                </Button>
            </Stack>
        </Container>
    )
}

export default Otp;