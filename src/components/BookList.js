import React from "react";
import { FlatList, Text, View, SectionList } from "react-native";

import BookDetail from "./BookDetail";
import section from "../json/books.json";

const BookList = ({ navigation }) => {
    const renderSectionHeader = ({ section }) =>(
        <>
            <Text>{section.title}</Text>
            <View>
                <FlatList
                    horizontal = {true}
                    data = {section.data}
                    renderItem = {({ item }) => <BookDetail book = {item} navigation = {navigation} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.title}
                    contentContainerStyle={{paddingTop: 8,
                    paddingLeft: 15, paddingRight: 15}}
                />
            </View>
        </>
    )

    const renderItem = ( ) => {
        return null;
    };
    return (
        <SectionList
            section = {section}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            renderSectionHeader={renderSectionHeader}
            renderItem = {renderItem}
            keyExtractor = {item => item.title}
        />    
    );
};

export default BookList;