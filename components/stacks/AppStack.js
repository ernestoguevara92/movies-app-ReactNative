import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexScreen from '../screens/IndexScreen'
import DetailsScreen from '../screens/DetailsScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
              name="Index" 
              component={IndexScreen}
              options={{
                title: 'Movies App',
                headerStyle: {
                    backgroundColor: '#5f002c'
                },
                headerTitleStyle: {
                    color: '#f5f5f5',
                    alignSelf: 'center'
                }
              }} />
            <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppStack