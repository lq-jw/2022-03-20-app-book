import React from "react";
import { FlatList, Text, View, SectionList, StyleSheet } from "react-native";

import BookDetail from "./BookDetail";
import section from "../json/books.json";

const BookList = ({ navigation }) => {
    const renderSectionHeader = ({ section }) =>(
        <>
            <Text style={styles.listTxt}>{section.title}</Text>
            <View>
                <FlatList
                    horizontal = {true}
                    data = {section.data}
                    renderItem = {({ item }) => <BookDetail book = {item} navigation = {navigation} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.title}
                    contentContainerStyle={{paddingTop: 0,
                    paddingLeft: 5, paddingRight: 15}}
                />
            </View>
        </>
    )

    const renderItem = ( ) => {
        return null;
    };
    return (
        <SectionList
            sections = {section}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            renderSectionHeader={renderSectionHeader}
            renderItem = {renderItem}
            keyExtractor = {item => item.title}
        />    
    );
};

const styles = StyleSheet.create({
    listTxt:{
        fontSize: 24,
        fontWeight: "500",
        marginLeft: 20,
        marginTop: 8
    },

});

export default BookList;