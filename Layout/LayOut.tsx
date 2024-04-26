// import { useSelector } from "react-redux";

import AppRouter from "../Routes/AppRouter"
import LoginRouter from "../Routes/LoginRoutes"
import { useSelector } from "react-redux";

const LayOut = () => {
    const auth: any = useSelector<any>(state => state.login.payload)
    console.log(auth)
    if (auth.isAuthentication == true) {
        return (
            <>
                <AppRouter />
            </>
        )
    } else {
        return (
            <>
                <LoginRouter />
            </>
        )
    }
}

export default LayOut;