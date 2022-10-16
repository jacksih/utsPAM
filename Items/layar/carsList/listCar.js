import React from "react";
import styles from "./style";
import cars from "./Database";
import { View, FlatList, Dimensions } from "react-native-web";
import CarItem from "../carItems/car";
import App from "../Videoitems/VideoItems";

const CarList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item}/>}
            showVerticalScrollIndicator={false}
            snapToAligment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
            <App/>
        </View>
    )
}

export default CarList;