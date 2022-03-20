import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking } from 'react-native';

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
                    source ={{
                        uri: image
                    }} 
                />    
            </View>
            <View>
                <Text>{title}</Text>
                <Text>{artist}</Text>
                <Text>{description}</Text>
                <Button
                    title ="BUY NOW FOR $46.99"
                />    
            </View>
        </ScrollView>
    );
}

export default DetailScreen;