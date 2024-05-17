import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Page/Home/Home';
import Prortfolio from '../Page/Prortfolio/Prortfolio';
import ListBitcoin from '../Page/Home/ListBitcoin';
import SignOut from '../Page/SignOut/SignOut';
import Payment from '../Page/Payment/Payment';
import Prices from '../Page/Prices/Prices';
import Buy from '../Page/Buy';
import CoinDetail from '../Page/CoinDetail';
import ConvertCoin from '../Page/ConvertCoin';
import Receive from '../Page/Receive';

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
                <Stack.Screen name="Prices" component={Prices} />
                <Stack.Screen name="Buy" component={Buy} />
                <Stack.Screen name="CoinDetail" component={CoinDetail} />
                <Stack.Screen name="ConvertCoin" component={ConvertCoin} />
                <Stack.Screen name="Receive" component={Receive} />

                {/* <Stack.Screen
                    options={{ headerShown: true }}
                    name="ChangePassword" component={ChangePassword} /> */}

            </Stack.Navigator>
        </>


    )



}

export default AppRouter;

