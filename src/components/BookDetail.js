import React from "react";
import { StyleSheet, Text, View, Image, Pressable, Linking} from "react-native";

const BookDetail = ({ book, navigation }) => {
    return (
        <View>
            <View>
                <Image
                    source = {{
                        uri: book.image
                    }}
                />
                <View>
                    <Text>{book.title}</Text>
                    <Text>{book.artist}</Text>
                </View>
            </View>
            <View>
                <Image
                    source = {{
                        uri: book.image
                    }}
                />
                <Pressable 
                    onPress={() => navigation.navigate('Detail', book)}
                ></Pressable>                
                <View>
                    <Text>{book.title}</Text>
                    <Text>{book.artist}</Text>
                </View>                
            </View>
        </View>
    )
};

export default BookDetail;