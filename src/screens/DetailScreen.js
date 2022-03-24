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
                                style={styles.bookstarStar}
                                disabled={true}
                                maxStars={5}
                                rating={star_rating}
                                fullStarColor={'#FFC41F'}
                                emptyStar = {"star"}
                                emptyStarColor={'#EDEDEF'}
                                halfStarEnabled={true}
                                starSize={14}
                                containerStyle={{justifyContent: "center"}}
                                starStyle={{marginRight: 5}}                            
                            />
                            {/* <View style={styles.bookstarNum}> */}
                                <Text style={styles.bookstarNum}>{star_rating_text}</Text>
                                <Text style={styles.bookstarNumBack}> / 5.0</Text>
                            {/* </View> */}
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
        fontSize: 24,
        marginTop: 10,
        marginBottom: 10,
    },
    bookartist: {
        fontSize: 14,
        color: "#666666",
        marginTop: 0,
        marginBottom: 10,
    },
    detailimg: {
        height: 300,
        width: 210,
        marginTop: 10,
        marginBottom: 10,

    },
    bookdescription: {
        marginLeft: 35,
        marginRight: 35,
        lineHeight: 24,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: 0.2,
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
        flex: 1,
        flexDirection:"row",
        justifyContent:'center',
        alignItems: "center",
        marginBottom: 10,
    },
    bookstarNum: {             
        marginLeft: 8,
    },
    bookstarNumBack: {
        color: "#666666",
    }
});

export default DetailScreen;