import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Page/Home/Home';
import Prortfolio from '../Page/Prortfolio/Prortfolio';
import ListBitcoin from '../Page/Home/ListBitcoin';
import SignOut from '../Page/SignOut/SignOut';
import Payment from '../Page/Payment/Payment';
const Stack = createNativeStackNavigator();

const AppRouter = () => {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Prortfolio" component={Prortfolio} />
                <Stack.Screen name="ListBitcoin" component={ListBitcoin} />
                <Stack.Screen name="SignOut" component={SignOut} />
                <Stack.Screen name="Payment" component={Payment} />




                {/* <Stack.Screen
                    options={{ headerShown: true }}
                    name="ChangePassword" component={ChangePassword} /> */}

            </Stack.Navigator>
        </>


    )



}

export default AppRouter;

