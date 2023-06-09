import React, { useEffect, useState } from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ScreenOne from './components/ScreenOne.jsx';
import ScreenThree from './components/ScreenThree.jsx';
import ScreenTwo from './components/ScreenTwo.jsx';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('comp1');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentComponent === 'comp1') {
        setCurrentComponent('comp2');
      } else if (currentComponent === 'comp2') {
        setCurrentComponent('comp3');
      }
    }, getTimeoutDuration());

    return () => clearTimeout(timer);
  }, [currentComponent]);

  const getTimeoutDuration = () => {
    if (currentComponent === 'comp1') {
      return 3000;
    } else if (currentComponent === 'comp2') {
      return 20000;
    } else {
      return 0;
    }
  };

  const renderComponent = () => {
    if (currentComponent === 'comp1') {
      return <ScreenOne />;
    } else if (currentComponent === 'comp2') {
      return <ScreenTwo />;
    } else {
      return <ScreenThree />;
    }
  };
  return (
    <View>
      <Image
        style={styles.background}
        source={require('./assets/images/award_bg.png')}
      />
    {renderComponent()}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 470,
    height: 790,
    zIndex: -1,
  },
});

export default App;
