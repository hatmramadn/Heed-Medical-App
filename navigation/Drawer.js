import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {colors} from '../constants/colors';
import HomeScreen from '../screens/home/HomeScreen';
import ClinicsScreen from '../screens/clinic/ClinicsScreen';
import ClinicOverView from '../screens/clinicOverView/ClinicOverviewScreen';
const Drawer = createDrawerNavigator();

export default function MyDrawer({navigation}) {
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerContent={({...props}) => (
        <DrawerContentScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              position: 'absolute',
            }}
            source={require('../assets/drawerbg.png')}
          />
          <DrawerItem
            labelStyle={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
            }}
            label="Home"
            onPress={() => props.navigation.navigate('Home')}
            icon={() => (
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/home.png')}
              />
            )}
          />
          <DrawerItem
            labelStyle={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
            }}
            label="Profile"
            onPress={() => console.log('')}
            icon={() => (
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/profile.png')}
              />
            )}
          />
          <DrawerItem
            labelStyle={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
            }}
            label="Our Clients"
            onPress={() => console.log('')}
            icon={() => (
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/client.png')}
              />
            )}
          />
          <DrawerItem
            labelStyle={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
            }}
            label="Medical Advice"
            onPress={() => console.log('')}
            icon={() => (
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/med-advice.png')}
              />
            )}
          />
          <DrawerItem
            labelStyle={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
            }}
            label="Favourites"
            onPress={() => props.navigation.navigate('Home')}
            icon={() => (
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/fav.png')}
              />
            )}
          />
          <DrawerItem
            labelStyle={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
            }}
            label="Join Us"
            onPress={() => console.log('')}
            icon={() => (
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/add.png')}
              />
            )}
          />
          <DrawerItem
            labelStyle={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
            }}
            label="About Heed"
            onPress={() => console.log('')}
            icon={() => (
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/about.png')}
              />
            )}
          />
          <DrawerItem
            labelStyle={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
            }}
            label="Settings"
            onPress={() => console.log('')}
            icon={() => (
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/settings.png')}
              />
            )}
          />
          <DrawerItem
            labelStyle={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
            }}
            label="Support Chat"
            onPress={() => console.log('')}
            icon={() => (
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/chat.png')}
              />
            )}
          />
          <DrawerItem
            labelStyle={{
              fontSize: 18,
              fontWeight: '600',
              color: 'white',
            }}
            label="History"
            onPress={() => console.log('')}
            icon={() => (
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/history.png')}
              />
            )}
          />
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-start',
                marginLeft: 20,
                marginTop: 40,
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/logout.png')}
              />

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: 'white',
                  marginLeft: 30,
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.closeDrawer()}
            style={{alignItems: 'center', marginTop: 60}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../assets/close.png')}
            />

            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                fontWeight: '600',
                color: colors.main,
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Clinic" component={ClinicsScreen} />
      <Drawer.Screen name="ClinicOverView" component={ClinicOverView} />
    </Drawer.Navigator>
  );
}
