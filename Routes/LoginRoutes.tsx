import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Page/Login/Login';
import Introduce from '../Page/Introduce/Introduce';
import SignUp from '../Page/SignUp/SignUp';
import Otp from '../Page/Login/Otp';
const Stack = createNativeStackNavigator();

const LoginRouter = () => {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Introduce" component={Introduce} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="otp" component={Otp} />
                <Stack.Screen name="signup" component={SignUp} />



                {/* <Stack.Screen
                    options={{ headerShown: true }}
                    name="ChangePassword" component={ChangePassword} /> */}

            </Stack.Navigator>
        </>


    )



}

export default LoginRouter;

