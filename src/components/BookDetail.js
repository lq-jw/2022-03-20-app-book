import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";

const BookDetail = ({ book, navigation }) => {
    return (
        <View style={styles.cardContainerStyle} >
            <View style={[styles.thumbnailContainerStyle, 
                      styles.cardSectionStyle]}>
                <Pressable 
                    onPress={() => navigation.navigate('Detail', book)}
                >
                    <Image
                    style={styles.bookimg}
                    source = {{uri: book.image}}
                    />                
                </Pressable>                  

                <View style={styles.headerContentStyle}>
                    <Text style={styles.booktitle}>{book.title}</Text>
                    <Text style={styles.bookartist}>{book.artist}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: "#ddd",
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
      },
    thumbnailContainerStyle: {
    flexDirection: "column",
    justifyContent: "flex-start"
    },  
    cardSectionStyle: {
        padding: 5,
        // backgroundColor: "#fff",
        // borderColor: "#ddd",
        // borderBottomWidth: 1
    },   
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 10,
        marginTop: 15
    },     
    booktitle: {
        fontFamily: "Roboto",
        fontSize: 16,
    },
    bookartist:{
        fontFamily: "Roboto",
        fontSize: 12,        
        opacity: 50,
        color: 'rgba(19, 19, 19, 0.5)'
    },
    bookimg: {
        height: 200,
        width: 140,
        margin: 5,

    },
    // bookbtn: {
    //     height: 20,
    //     width: 40,
    //     backgroundColor: "#4A9EED"
    // }
});

export default BookDetail;