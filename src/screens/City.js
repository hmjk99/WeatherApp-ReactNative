import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/cityBackground.jpg')} style={styles.imageLayout}>
            <Text style={[styles.cityName, styles.cityText]}>London</Text>
            <Text style={[styles.countryName, styles.cityText]}>UK</Text>
            <View style={styles.populationWrapper}>
                <Feather name={'user'} size={50} color={'yellow'} />
                <Text style={styles.populationText}>8000</Text>
            </View>
            <View style={styles.riseSetWrapper}>
                <Feather name={'sunrise'} size={50} color={'white'} />
                <Text style={styles.riseSetText}>10:46 AM</Text>
                <Feather name={'sunset'} size={50} color={'white'} />
                <Text style={styles.riseSetText}>05:56 PM</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'yellow',
        fontWeight: 'bold'
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    }
})
export default City