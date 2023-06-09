import { useRef,useEffect } from "react";
import { Image, Text, View, StyleSheet,Animated, TouchableOpacity } from "react-native";
const ScreenTwo = () => {
  const position = useRef(new Animated.Value(0)).current;

  const animateIn = () => {
    Animated.timing(position, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = () => {
    Animated.timing(position, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyles = {
    transform: [
      {
        translateX: position.interpolate({
          inputRange: [0, 2],
          outputRange: [300, 0],
        }),
      },
    ],
  };

  useEffect(() => {
    animateIn();
  }, []);
  return (
    <View style={styles.screenTwo} >
      <Animated.View style={[styles.avatarContain ,animatedStyles]} >
        <Image style={styles.avatar} source={require('../assets/images/avtar2.png')}/>
        <View >
          <Text style={styles.avatar2}>D-Lister</Text>
          <Text style={{color:'yellow'}} >Sally</Text>
        </View>
      </Animated.View>
      <Text style={styles.loveText}>Gave U Some Love</Text>
      <Text style={styles.loveNumber}>15000</Text>
      <Image style={styles.heart} source={require('../assets/images/main-heart.png')}/>
      <Image style={styles.girl} source={require('../assets/images/girlClap.png')}/>
      <Image style={styles.stage} source={require('../assets/images/awardPlatform.png')}/>
      <TouchableOpacity activeOpacity={10} onPress={()=>animateOut()}>
      <Image style={styles.arrow} source={require('../assets/images/arrow.png')} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  screenTwo:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:70
  },
  avatar:{
     width:100,
     height:100,
     borderRadius:50,
     resizeMode:'contain' 
  },
 heart:{
     width:100,
     height:100,
     resizeMode:'contain' 
 },
 girl:{
    position: 'absolute',
    top: 320,
    width: 350,
    height: 300,
    resizeMode: 'contain',
    zIndex: 10,
 },
 stage:{
    position: 'absolute',
    top: 483,
    width: 420,
    height: 300,
    resizeMode: 'contain',
 },
 arrow:{
    position: 'absolute',
    width: 70,
    height: 70,
    top:160,
    left: 80,
    resizeMode: 'contain',
 },
 avatarContain:{
    display:'flex',
    flexDirection:'row',
    gap:40,
    justifyContent:'center',
    alignItems:'center'
 },
 loveNumber:{
    position:'absolute',
    color:'yellow',
    fontSize:20,
    top:230,
    zIndex:2
 },
 loveText:{
    color:'yellow',
    fontSize:20
 },
 avatar2:{
   fontSize:20,
   color:'yellow'
 }
})

export default ScreenTwo;