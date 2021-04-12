import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Platform,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import CustomTextInput from '../../components/CustomTextInput';
import {colors} from '../../constants/colors';

const DoctorReservation = ({route, navigation}) => {
  const [isShowen, setIsShowen] = useState(false);

  const {control, handleSubmit, errors} = useForm();
  const doctor = route.params.doctor;
  console.log(doctor);

  return (
    <View style={{flex: 1}}>
      {isShowen === true ? (
        <View
          style={{
            // padding: 20,
            top: 0,
            right: 0,
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
            justifyContent: 'center',
          }}>
          <View style={{padding: 20}}>
            <Calendar />
          </View>
          <TouchableOpacity
            onPress={() => setIsShowen(false)}
            style={{
              width: '100%',
              height: '100%',
              zIndex: -1,
              backgroundColor: 'black',
              top: 0,
              right: 0,
              position: 'absolute',
              opacity: 0.2,
            }}></TouchableOpacity>
        </View>
      ) : null}
      <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginBottom: 20,
            }}>
            <Image
              style={{width: 15, height: 15, marginRight: 10}}
              source={require('../../assets/back-main.png')}
            />
            <Text>Back</Text>
          </View>
        </TouchableOpacity>
        <View>
          <View style={styles.doctorCardHorizontal}>
            <Image
              style={{width: 80, height: 80, borderRadius: 80}}
              source={{uri: doctor.image}}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={styles.heading}>{`Doctor name: ${doctor.name}`}</Text>
              <Text
                style={{
                  marginBottom: 3,
                }}>{`Specialized in: ${doctor.specialist}`}</Text>
              <Text>{`Fee: ${doctor.price}.00 KD`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.reservationForm}>
          <Text style={styles.heading}>Patient Info </Text>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <CustomTextInput
                placeholder="Name"
                value={value}
                onBlur={onBlur}
                handleChange={value => onChange(value)}
              />
            )}
            name="name"
            rules={{required: 'Name is required'}}
            defaultValue=""
          />
          {errors.name && (
            <Text style={{color: 'red', marginBottom: 2}}>
              {errors.name.message}
            </Text>
          )}
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <CustomTextInput
                placeholder="Mobile Number"
                value={value}
                onBlur={onBlur}
                handleChange={value => onChange(value)}
              />
            )}
            name="name"
            rules={{required: 'Name is required'}}
            defaultValue=""
          />
          {errors.name && (
            <Text style={{color: 'red', marginBottom: 2}}>
              {errors.name.message}
            </Text>
          )}
          <Text style={{marginVertical: 10, color: colors.grey}}>
            Appointment:
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 20}}>
              <Controller
                control={control}
                render={({onChange, onBlur, value}) => (
                  <TouchableOpacity onPress={() => setIsShowen(true)}>
                    <Text>Date</Text>
                  </TouchableOpacity>
                )}
                name="name"
                rules={{required: 'Name is required'}}
                defaultValue=""
              />
              {errors.name && (
                <Text style={{color: 'red', marginBottom: 2}}>
                  {errors.name.message}
                </Text>
              )}
            </View>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <CustomTextInput
                  placeholder="Time"
                  value={value}
                  onBlur={onBlur}
                  handleChange={value => onChange(value)}
                />
              )}
              name="name"
              rules={{required: 'Name is required'}}
              defaultValue=""
            />
            {errors.name && (
              <Text style={{color: 'red', marginBottom: 2}}>
                {errors.name.message}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DoctorReservation;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: colors.main,
    marginBottom: 10,
  },
  doctorCardHorizontal: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reservationForm: {
    padding: 10,
    // backgroundColor: colors.greyLight,
  },
});
