import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking, Pressable } from 'react-native';


const DetailScreen = ({ route }) => {
    const { title,
        artist,
        image,
        description
    } = route.params;
    return(
        <ScrollView>
            <View>
                <Image
                    style={styles.detailimg}
                    source ={{ uri: image}} 
                />    
            </View>
            <View>
                <Text style={styles.booktitle}>{title}</Text>
                <Text style={styles.bookartist}>{artist}</Text>
                <Text>{description}</Text>
                <Pressable
                    style = {styles.detailbtn}
                    title ="BUY NOW FOR $46.99"
                ></Pressable>    
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    booktitle: {
        fontFamily: "Roboto",
        fontSize: 24,
    },
    bookartist: {
        fontFamily: "Roboto",
        fontSize: 14,
        color: "#666666"
    },
    detailimg: {
        height: 300,
        width: 210,
    },
    detailbtn: {
        width: 190,
        height: 36,
        backgroundColor: "#6200EE"
    }
});

export default DetailScreen;