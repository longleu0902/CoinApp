import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Page/Home';
import Menu from '../Page/Menu';
import Search from '../Page/Search';


const Stack = createNativeStackNavigator();

const AppRouter = () => {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search" component={Search} />



                {/* <Stack.Screen
                    options={{ headerShown: true }}
                    name="ChangePassword" component={ChangePassword} /> */}

            </Stack.Navigator>
        </>


    )



}

export default AppRouter;

