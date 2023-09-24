import React from 'react'
import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,
    Box,
    Grid,
} from '@chakra-ui/react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import "react-phone-input-2/lib/bootstrap.css";

const Sigin = ({ phone, setPhone, onSignup }) => {
    return (
        <Container
            display={'grid'}
            placeItems={'center'}
        >
            <Image
                m='auto'
                my='12'
                w='70%'
                src='https://www.hrkatha.com/wp-content/uploads/2021/10/AdmitKard.png'
            />
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 8 }}
            >
                <Grid gap='4'>
                    <Heading
                        fontWeight={400}
                        fontSize={{ base: '2xl', sm: '4xl', md: '3xl' }}
                        lineHeight={'110%'}>
                        Welcome Back
                    </Heading>
                    <Text
                        color={'gray.500'}
                        maxW={'3xl'}
                        fontSize={'16px'}
                    >
                        Please sign in to your account.
                    </Text>
                </Grid>

                <Box
                    w='300px'
                    ml='0px' >
                    <PhoneInput
                        country={'in'}
                        enableSearch
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                    />
                </Box>

                <Text
                    color={'gray.500'}
                    maxW={'3xl'}
                    fontSize={'12px'}
                >
                    We will send you a one time SMS message. <br /> Charges may apply.
                </Text>
                <Button
                    rounded={'full'}
                    my={14}
                    px={8}
                    colorScheme={'orange'}
                    bg={'#f7b348'}
                    _hover={{ bg: 'orange.300' }}
                    onClick={onSignup}
                >
                    Sign in with OTP
                </Button>
            </Stack>
        </Container>
    )
}

export default Sigin