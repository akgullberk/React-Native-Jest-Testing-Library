import { StyleSheet } from "react-native";

export default {
    primary: StyleSheet.create({
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
          },
}),

secondary: StyleSheet.create({
    container:{
        borderColor:"blue",
        borderWidth:1,
        padding:10,
        borderRadius:10,
        margin:10,
        justifyContent:"center",
        alignItems:"center",
      },
      title:{
        color:"blue",
        fontWeight:"bold",
      },
}),
}