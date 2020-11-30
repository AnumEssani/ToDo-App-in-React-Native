import React from 'react';
import { Dimensions, StyleSheet, Text, View} from 'react-native';

export default function Header () {
    return(
        <View style={styles.header}>
            <Text style={styles.title}> My Todos</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        // height: 80,
        padding:20,
        backgroundColor: 'coral',
        width:Dimensions.get('screen').width,
        marginTop:150,
    },
    title:{ 
        fontSize: 30,
        textAlign:"center",
        color:"#fff",
        fontWeight: 'bold',
    }



})