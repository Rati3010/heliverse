import React, { useEffect, useState } from 'react';
import girl from '../assets/images/girlClap.png';
import heart from '../assets/images/main-heart.png';
import stage from '../assets/images/awardPlatform.png';
import arrow from '../assets/images/arrow.png';
import { Image, Text, View, StyleSheet } from 'react-native';
const ScreenThree = () => {
  const [likeNumber, setLikeNumber] = useState(15000);
  useEffect(() => {
    const timer = setInterval(() => {
      if (likeNumber < 40000) {
        setLikeNumber(state => state + 1000);
      } else {
        clearTimeout(timer);
      }
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [likeNumber]);
  return (
    <View style={styles.screenThree}>
      <Text style={styles.para}>4 Friends Gave U Some Love</Text>
      <Text style={styles.likeCount}>{likeNumber}</Text>
      <Image style={styles.heart} source={heart} />
      <Image style={styles.girl} source={girl} />
      <Image style={styles.stage} source={stage} />
      <Image style={styles.arrow} source={arrow} />
    </View>
  );
};
const styles = StyleSheet.create({
  screenThree: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  heart: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  girl: {
    position: 'absolute',
    top: 320,
    width: 350,
    height: 300,
    resizeMode: 'contain',
    zIndex: 10,
  },
  arrow: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: 470,
    right: 60,
    resizeMode: 'contain',
  },
  stage: {
    position: 'absolute',
    top: 435,
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  para: {
    color: 'yellow',
    fontSize: 20,
  },
  likeCount: {
    position: 'absolute',
    color: 'yellow',
    top: 170,
    zIndex: 2,
    fontSize: 20,
    fontWeight: 700,
  },
});
export default ScreenThree;
