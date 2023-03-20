import React from 'react'
import { Image, StyleSheet } from 'react-native'

const DisplayImage = props => {
  if (props.taskStatus == 1) {
    return (
      <Image style={styles.image} source={require('../../assets/check.png')} />
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    margin: 80,
    marginTop: 200
  }
})

export default DisplayImage