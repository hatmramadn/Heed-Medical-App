import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../constants/colors';
import createMapLink from 'react-native-open-maps';

const ClinicInfoScreen = ({navigation, clinicData}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.clinicLocation}>
        <Text style={{fontSize: 16}}>Clinic location on map:</Text>
        <TouchableOpacity
          onPress={() => {
            createMapLink({
              latitude: parseInt(clinicData.latitude),
              longitude: parseInt(clinicData.longitude),
              query: Platform.OS === 'ios' ? 'Yosemite' : 'Trail',
            });
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../assets/map-location.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.clinicInsurance}>
        <Text>Insurance Companies:</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {clinicData.incurance_companies.map(company => (
            <View
              key={company.id}
              style={{
                borderWidth: 1,
                borderRadius: 50,
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <Image
                style={{width: 35, height: 35}}
                source={{uri: company.image}}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ClinicInfoScreen;

const styles = StyleSheet.create({
  clinicLocation: {
    marginHorizontal: 20,
    borderTopColor: colors.grey,
    borderTopWidth: 1,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    paddingVertical: 20,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clinicInsurance: {
    paddingHorizontal: 20,
  },
});
