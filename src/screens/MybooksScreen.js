import React from "react";
import { View , Text, StyleSheet} from "react-native";

const MybooksScreen = () => {
    return(
        <View style = {styles.container}>
            <Text style={styles.txt}>This is Mybooks Screen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    txt:{
        fontSize: 30,
    }
});

export default MybooksScreen;