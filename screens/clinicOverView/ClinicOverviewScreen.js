import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  useWindowDimensions,
  Dimensions,
  FlatList,
} from 'react-native';
import Swiper from 'react-native-web-swiper';
import axios from 'axios';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {colors} from '../../constants/colors';
import Header from '../../components/Header';
import ReservationStack from '../../navigation/ReservationStack';

import ClinicInfoScreen from '../clinicInfo/ClinicInfoScreen';

const Tab = createMaterialTopTabNavigator();

const ClinicOverviewScreen = ({route, navigation}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [clinicData, setClinicData] = React.useState({});

  React.useEffect(() => {
    axios
      .get(`http://heed.linekw.net/api/clinic/${route.params.id}`)
      .then(res => {
        setClinicData(res.data.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [route.params.id]);

  return (
    <View style={{height: '100%'}}>
      <StatusBar barStyle="light-content" />
      <Header navigation={navigation} placeholder="Search Clinics" />
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
                  uri: `http://heed.linekw.net/public/upload/slider/n3ai1.static-banner1.png`,
                }}
              />
              <Image
                style={{
                  width: '100%',
                  height: 80,
                }}
                source={{
                  uri: `http://heed.linekw.net/public/upload/slider/pjlMF.static-banner1.png`,
                }}
              />
            </Swiper>
          </View>
          <View style={styles.container}>
            <View style={styles.clinicHeader}>
              <View style={styles.clinicHeaderTitle}>
                <Text style={styles.headerTitle}>
                  {`Test Clinic ${clinicData.clinic.name}`}
                </Text>
                <View style={styles.headerLocation}>
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 10,
                    }}
                    source={require('../../assets/location.png')}
                  />
                  <Text
                    style={{
                      ...styles.headerTitle,
                      fontSize: 16,
                    }}>
                    {`Location ${clinicData.clinic.address}`}
                  </Text>
                </View>
                <View style={styles.headerLocation}>
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 10,
                    }}
                    source={require('../../assets/time.png')}
                  />
                  <Text
                    style={{
                      ...styles.headerTitle,
                      fontSize: 16,
                    }}>
                    {`Working hours: ${clinicData.clinic.work_times}`}
                  </Text>
                </View>
              </View>
              <View style={styles.overlay}></View>

              <Image
                style={{width: '100%', height: 200}}
                source={{uri: clinicData.clinic.image}}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              height: Dimensions.get('screen').height * 1.1,
            }}>
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: colors.main,
                inactiveTintColor: 'black',
                indicatorStyle: {
                  backgroundColor: colors.main,
                },
              }}
              swipeEnabled={true}>
              <Tab.Screen name="Services">
                {props => (
                  <ReservationStack {...props} clinicData={clinicData} />
                )}
              </Tab.Screen>
              <Tab.Screen name="Info">
                {props => (
                  <ClinicInfoScreen {...props} clinicData={clinicData.clinic} />
                )}
              </Tab.Screen>
            </Tab.Navigator>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ClinicOverviewScreen;

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: 200,
    zIndex: 2,
    position: 'absolute',
    top: 0,
    backgroundColor: 'black',
    opacity: 0.3,
  },
  adsSlider: {
    height: 80,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  clinicHeader: {},
  clinicHeaderTitle: {
    position: 'absolute',
    bottom: 10,
    zIndex: 10,
    left: 20,
  },
  headerTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 5,
  },
  headerLocation: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
