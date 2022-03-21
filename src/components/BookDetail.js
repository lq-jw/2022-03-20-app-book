import React from "react";
import { StyleSheet, Text, View, Image, Pressable, Linking} from "react-native";

const BookDetail = ({ book, navigation }) => {
    return (
        <View>
            <View>
                <Image
                    style={styles.bookimg}
                    source = {{uri: book.image}}
                />
                <View>
                    <Text style={styles.booktitle}>{book.title}</Text>
                    <Text style={styles.bookartist}>{book.artist}</Text>
                </View>
            </View>
            <View>
                {/* <Image
                    style={styles.bookimg}
                    source = {{uri: book.image}}
                /> */}
                <Pressable 
                    style={styles.bookbtn}
                    onPress={() => navigation.navigate('Detail', book)}
                ></Pressable>                
                {/* <View>
                    { <Text style={styles.booktitle}>{book.title}</Text> }
                    <Text>{book.artist}</Text>
                </View>                 */}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    booktitle: {
        fontFamily: "Roboto",
        fontSize: 16,
    },
    bookartist:{
        fontFamily: "Roboto",
        fontSize: 12,        
    },
    bookimg: {
        height: 200,
        width: 140,
    },
    bookbtn: {
        height: 20,
        width: 40,
        backgroundColor: "#4A9EED"
    }
});

export default BookDetail;