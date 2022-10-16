import React from "react";
import { View, Text, ImageBackground } from "react-native-web";
import styles from "./style";
import Button from "../button";

const CarItem = (props) => {

    const{ name, tagline, taglineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground 
            source={image}
            style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline} {''}
                    <Text style={styles.subTitleCTA}>{taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>

                <Button 
                type="primary" 
                content={"Costum Order"} 
                onPress={() => {
                    console.warn('Console order ditekan')
                }} />
                <Button 
                type="secondary" 
                content={"Existing inventory"} 
                onPress={() => {
                    console.warn('Inventory ditekan ditekan')
                }} />
            </View>

        </View>
    );
};

export default CarItem;