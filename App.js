import React from 'react'
import AddHabitScreen from './AddHabitScreen'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
} from 'react-native'
import { StackNavigator } from 'react-navigation'

const Button = props => (
  <TouchableHighlight
    {...props}
    underlayColor="#1D49A5"
    style={{
      backgroundColor: '#3275F6',
      padding: 10,
    }}
  >
    {props.children}
  </TouchableHighlight>
)

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      onPress={() => {
        navigation.navigate('AddHabit')
      }}
    >
      <Text style={{ color: 'white' }}>Tap</Text>
    </Button>
  )
}
HomeScreen.navigationOptions = {
  title: 'Momentum 💨',
}

export default (SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  AddHabit: { screen: AddHabitScreen },
}))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
