import React from 'react'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem';

const DATA = [
    {
        "dt": 1661871600,
        "main": {
          "temp": 296.76,
          "feels_like": 296.98,
          "temp_min": 296.76,
          "temp_max": 297.87,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 933,
          "humidity": 69,
          "temp_kf": -1.11
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "dt_txt": "2022-08-30 15:00:00"
      },
      {
        "dt": 1661882400,
        "main": {
          "temp": 295.45,
          "feels_like": 295.59,
          "temp_min": 292.84,
          "temp_max": 295.45,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 931,
          "humidity": 71,
          "temp_kf": 2.61
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "dt_txt": "2022-08-30 18:00:00"
      }
]



const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
    )
    const { container, image } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
            source={require('../../assets/clouds.jpg')} 
            style={image}
            >
                <Text>Upcoming Weather</Text>
                <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.dt_txt}/>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'skyblue'
    },
    image: {
        flex: 1
    }
})

export default UpcomingWeather