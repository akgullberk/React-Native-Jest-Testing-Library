import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'

const Button = ({title,onClick}) => {
  return (
    <TouchableOpacity testID='button-touchable' style={styles.primary.container} onPress={onClick}>
        <Text testID='button-title' style={styles.primary.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button