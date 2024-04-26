import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Page/Home/Home';
const Stack = createNativeStackNavigator();

const AppRouter = () => {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                {/* <Stack.Screen
                    options={{ headerShown: true }}
                    name="ChangePassword" component={ChangePassword} /> */}

            </Stack.Navigator>
        </>


    )



}

export default AppRouter;

