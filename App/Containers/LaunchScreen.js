import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import FullButton from '../Components/FullButton'
import DrawerButton from '../Components/DrawerButton'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. 
            </Text>
            <FullButton text="Sign In" onPress={() => this.props.navigation.navigate('MainScreen')}/>
            <FullButton text="Sign Up" />
          </View>

        </ScrollView>
      </View>
    )
  }
}