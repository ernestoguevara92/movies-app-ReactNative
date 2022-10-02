import { StatusBar, Box, HStack, Text } from 'native-base';

const Header = () => (
    <>
        <StatusBar backgroundColor="#5f002c" barStyle="light-content" />
        <Box safeAreaTop backgroundColor='#5f002c'>
            <HStack bg='#5f002c' justifyContent='center' alignItems='center' px={1} py={3}>
                <Text color='#f5f5f5' fontSize='20' fontWeight='bold'>Movies App</Text>
            </HStack>
        </Box>
    </>
)

export default Header;