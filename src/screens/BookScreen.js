import React from "react";
import { View , StyleSheet} from "react-native";
import BookList from "../components/BookList";
//import bookData from "../json/books.json";

const BookScreen = ({ navigation }) => {
    return(
        <View style = {styles.container}>
            <BookList
                // list = {bookData.bookList}
                navigation = {navigation}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default BookScreen;