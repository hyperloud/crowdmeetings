import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import FullButton from '../Components/FullButton'
import DrawerButton from '../Components/DrawerButton'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class MainScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text>
              Hello username! 
            </Text>
          </View>

          <View style={styles.section} >
            <Text> 
              This is your main screen!
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}