import {
    Box,
    Button,
    Container,
    Grid,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';
import React from 'react';
import SuccessSvg from '../Components/SuccessSvg';

const Success = () => {
    return (
        <Container
            display={'grid'}
            placeItems={'center'}
        >
            <Box my='7'>
                <SuccessSvg />
            </Box>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 8 }}
            >
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
                    lineHeight={'110%'}>
                    Welcome to AdmitKard
                </Heading>
                <Text
                    color={'gray.500'}
                    maxW={'3xl'}
                    fontSize={'16px'}
                    lineHeight={'18px'}
                >
                    In order to provide you with <br />
                    a custom experience, <br />
                    <Text
                        as={'span'}
                        color={'gray.600'}
                    >
                        we need to ask you a few questions.
                    </Text>
                </Text>
                <Grid gap='3' mt='12'>
                    <Button
                        rounded={'full'}
                        px={6}
                        colorScheme={'orange'}
                        bg={'#f7b348'}
                        _hover={{ bg: 'orange.300' }}>
                        Get started
                    </Button>
                    <Text
                        color={'gray.500'}
                        maxW={'3xl'}
                        fontSize={'12px'}
                    >
                        This will take 5 minutes.
                    </Text>
                </Grid>
            </Stack>
        </Container>
    )
}

export default Success;