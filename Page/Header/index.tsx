import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Header {
    navigateScreen: string,
    title: string,
    Icon: any
}
const Header = (props: Header) => {
    const { navigateScreen, title, Icon } = props;
    const navigate = useNavigation<any>()
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigate.navigate(`${navigateScreen}`)} style={{ width: "5%" }}>
                <Image source={Icon} />
            </TouchableOpacity>
            <View style={{ width: "95%", alignItems: "center" }}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>

    )
}

export default Header