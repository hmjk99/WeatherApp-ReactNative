import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import IconText from '../components/IconText';

const City = () => {
    const { container, cityName, cityText, countryName, populationText, populationWrapper, riseSetText, riseSetWrapper, imageLayout, rowLayout } = styles
    return (
    <SafeAreaView style={container}>
        <ImageBackground source={require('../../assets/cityBackground.jpg')} style={imageLayout}>
            <Text style={[cityName, cityText]}>London</Text>
            <Text style={[countryName, cityText]}>UK</Text>
            <View style={[populationWrapper, rowLayout]}>
                <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyTextStyles={populationText} />
            </View>
            <View style={[riseSetWrapper, rowLayout]}>
                <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:46 AM'} bodyTextStyles={riseSetText} />
                <IconText iconName={'sunset'} iconColor={'white'} bodyText={'07:50 PM'} bodyTextStyles={riseSetText} />
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
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default City