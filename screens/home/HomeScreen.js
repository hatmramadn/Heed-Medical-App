import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import Swiper from 'react-native-web-swiper';
import axios from 'axios';

import {colors} from '../../constants/colors';
import Header from '../../components/Header';
import Category from '../../components/Category';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [homeData, setHomeData] = React.useState({});

  React.useEffect(() => {
    axios
      .get('http://heed.linekw.net/api/home_screen')
      .then(res => {
        setHomeData(res.data.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <Header navigation={navigation} />
      {isLoading === true ? (
        <ActivityIndicator
          color={colors.main}
          size="large"
          style={{top: 200}}
        />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          bouncesZoom={true}
          style={{
            zIndex: -1,
            top: 100,
            backgroundColor: '#eee',
            height: '100%',
          }}>
          <View style={styles.adsSlider}>
            <Swiper
              horizontal
              loop
              timeout={3}
              controlsProps={{
                nextTitle: null,
                prevTitle: null,
                dotActiveStyle: {
                  backgroundColor: colors.main,
                },
              }}>
              <Image
                style={{
                  width: '100%',
                  height: 80,
                }}
                source={{
                  uri: `${homeData.slider[0].image}/n3ai1.static-banner1.png`,
                }}
              />
              <Image
                style={{
                  width: '100%',
                  height: 80,
                }}
                source={{
                  uri: `${homeData.slider[0].image}/n3ai1.static-banner1.png`,
                }}
              />
            </Swiper>
          </View>
          <View style={styles.categoriesContainer}>
            {homeData.categories.map(category => (
              <Category
                category={category}
                key={category.id}
                handlePress={() => navigation.navigate('Clinic')}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  adsSlider: {
    height: 80,
    backgroundColor: 'white',
    marginTop: 30,
  },
  categoriesContainer: {
    flex: 1,
    margin: 3,
  },
});
