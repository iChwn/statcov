/* eslint-disable */
import React from "react"
import { Image, Text, View } from "react-native"
import { Images } from "../../assets"

const LoginView = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center"}}>
      <Image source={Images.StatcovLogo} style={{width: 100, height: 100, marginBottom: 20}} />
      <Text style={{fontFamily: "roboto", fontSize: 25, color: "#000000", fontWeight: "normal"}}>Login Statcov</Text>
    </View>
  )
}

export default LoginView