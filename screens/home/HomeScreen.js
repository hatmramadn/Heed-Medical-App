import React from 'react';
import {
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Swiper from 'react-native-web-swiper';
import axios from 'axios';

import {colors} from '../../constants/colors';

const HomeScreen = () => {
  const [homeDate, setHomeData] = React.useState({});

  React.useEffect(() => {
    axios
      .get('http://heed.linekw.net/api/home_screen')
      .then(res => {
        setHomeData(res.data.data);
        console.log(homeDate);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            position: 'absolute',
            top: -60,
            zIndex: 1,
            // opacity: 0.1,
          }}
          source={require('../../assets/sticky-header.png')}
        />
      </View>
      <ScrollView
        style={{
          zIndex: -1,
          top: 100,
          backgroundColor: '#eee',
          height: '100%',
        }}>
        <View style={{marginTop: 33}}>
          <View style={styles.adsSlider}>
            <Swiper
              horizontal
              loop
              timeout={2}
              controlsProps={{
                nextTitle: null,
                prevTitle: null,
                dotActiveStyle: {backgroundColor: colors.main},
              }}></Swiper>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  adsSlider: {
    backgroundColor: 'white',
    height: 50,
  },
});
