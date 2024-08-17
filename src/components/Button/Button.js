import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text testID='button-title' style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container:{
    backgroundColor:"blue",
    padding:10,
    borderRadius:10,
    margin:10,
    justifyContent:"center",
    alignItems:"center",
  },
  title:{
    color:"white",
    fontWeight:"bold",
  }

})