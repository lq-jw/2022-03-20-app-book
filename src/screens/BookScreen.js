import React from "react";
import { View } from "react-native";
import BookList from "../components/BookList";
import bookData from "../json/books.json";

const BookScreen = ({ navigation }) => {
    return(
        <View style = {{flex: 1}}>
            <BookList
                // list = {bookData.bookList}
                navigation = {navigation}
            />
        </View>
    );
};

export default BookScreen;