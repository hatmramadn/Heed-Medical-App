import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';
import axios from 'axios';

import {colors} from '../../constants/colors';
import Header from '../../components/Header';
import Clinic from '../../components/Clinic';

const ClinicsScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [clinicsData, setclinicsData] = React.useState({});

  React.useEffect(() => {
    axios
      .get('http://heed.linekw.net/api/clinics?sort=high_price')
      .then(res => {
        setclinicsData(res.data.data.clinics);
        console.log(res.data.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <Header navigation={navigation} placeholder="Search Clinics" />
      {isLoading === true ? (
        <ActivityIndicator
          color={colors.main}
          size="large"
          style={{top: 200}}
        />
      ) : (
        <View
          style={{
            zIndex: -1,
            top: 100,
            backgroundColor: '#eee',
            height: '100%',
          }}>
          <View style={styles.categoriesContainer}>
            <FlatList
              initialNumToRender={7}
              showsVerticalScrollIndicator={false}
              data={clinicsData}
              keyExtractor={clinic => clinic.id}
              renderItem={({item}) => (
                <Clinic
                  key={item.id}
                  clinic={item}
                  handlePress={() =>
                    navigation.navigate('ClinicOverView', {id: item.id})
                  }
                />
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ClinicsScreen;

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    margin: 3,
    marginTop: -1,
  },
});
