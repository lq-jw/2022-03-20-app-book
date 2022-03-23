import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image,TouchableOpacity} from 'react-native';
import StarRating from 'react-native-star-rating';

const DetailScreen = ({ route }) => {
    const { title,
        artist,
        image,
        description,
        star_rating,
        star_rating_text,
    } = route.params;
    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerSm}>
                <View>
                    <Image
                        style={styles.detailimg}
                        source ={{ uri: image}} 
                    />    
                </View>
                <View style={styles.detailTxt}>
                    <Text style={styles.booktitle}>{title}</Text>
                    <Text style={styles.bookartist}>{artist}</Text>
                    
                   {star_rating ? (
                        <View style={styles.bookstar}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={star_rating}
                                fullStarColor={'#FFC41F'}
                                emptyStar = {"star"}
                                emptyStarColor={'#EDEDEF'}
                                halfStarEnabled={true}
                                starSize={14}
                                // containerStyle={{justifyContent: "center"}}
                                // starStyle={{marginRight: 4}}                            
                            />
                            <View style={styles.bookstarNum}>
                                <Text>{star_rating_text}</Text>
                                <Text> / 5.0</Text>
                            </View>
                        </View>) : null 
                    }                    
                    <Text style={styles.bookdescription}>{description}</Text>
                    <TouchableOpacity style = {styles.detailbtn}>
                        <Text style = {styles.detailbtnTxt}>BUY NOW FOR $46.99</Text>
                        </TouchableOpacity>    
                </View>            
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },    
    containerSm:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },   
    detailTxt: {
        flex: 1,
        alignItems: "center"
    },
    booktitle: {
        fontFamily: "Roboto",
        fontSize: 24,
        marginTop: 10,
        marginBottom: 10,
    },
    bookartist: {
        fontFamily: "Roboto",
        fontSize: 14,
        color: "#666666",
        marginTop: 0,
        marginBottom: 10,
    },
    detailimg: {
        height: 300,
        width: 210,
        marginTop: 10,
        marginBottom: 30,
    },
    bookdescription: {
        marginLeft: 35,
        marginRight: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailbtn: {
        width: 190,
        height: 36,
        backgroundColor: "#6200EE",
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 4,
    },
    detailbtnTxt: {
        fontSize: 14,
        color: "#fff",
    },
    bookstar:{
        width:"100%",
        flexDirection:"row",
        justifyContent:'center'
    },
    bookstarNum: {             
        flexDirection: "row",
        justifyContent: 'center',
        marginLeft: '8px',
    },
});

export default DetailScreen;