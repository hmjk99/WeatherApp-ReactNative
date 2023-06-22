import React from "react"
import CurrentWeather from "../screens/CurrentWeather"
import UpcomingWeather from "../screens/UpcomingWeather"
import City from "../screens/City"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle: {
                backgroundColor: 'lightblue'
            },
            headerStyle: {
                backgroundColor: 'lightblue'
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                color: 'grey'
            }

          }}>
            <Tab.Screen name={'Current'} component={CurrentWeather} options={{
              tabBarIcon: ({focused}) => <Feather name={'droplet'} size={25} color={focused ? 'blue' : 'black'} />
            }} />
            <Tab.Screen name={'Upcoming'} component={UpcomingWeather} options={{
              tabBarIcon: ({focused}) => <Feather name={'clock'} size={25} color={focused ? 'blue' : 'black'} />
            }} />
            <Tab.Screen name={'City'} component={City} options={{
              tabBarIcon: ({focused}) => <Feather name={'home'} size={25} color={focused ? 'blue' : 'black'} />
            }} />
        </Tab.Navigator>
    )
}

export default Tabs