import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";
const ScreenOne = () => {
  return (
    <View style={styles.screenOne}>
      <Image style={styles.castLogo} source={require('../assets/images/castingLogo.png')}/>
      <Text style={styles.casting} >CASTING CALL</Text>
      <Text style={styles.text}>The Result R In!</Text>
      <Image style={styles.girlImage} source={require('../assets/images/girlClap.png')}/>
      <Image style={styles.platform} source={require('../assets/images/awardPlatform.png')}/>
    </View>
  );
};
const styles = StyleSheet.create({
    screenOne:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    castLogo:{
        width:100,
        height:100,
        resizeMode:'contain',
        marginTop:100,
    }, 
    girlImage:{
       position:'absolute',
       top:420,
       width:350,
       height:300,
       resizeMode:'contain',
       zIndex:10
    },
    platform:{
        position:'absolute',
        top:540,
        width:400,
        height:400,
        resizeMode:'contain',
    },
    casting:{
        fontFamily:'cursive',
        color:'yellow',
        fontSize:20,
        transform:[{rotate:'-15deg'}]
    },
    text:{
        fontFamily:'monospace',
        color:'yellow',
        fontSize:20,
        marginTop:100,
        marginBottom:20
    }
})

export default ScreenOne;