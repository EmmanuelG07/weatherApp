import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

const Home = (props) => {
  const [city, setCity] = useState('');

  const cities = [
    {
      name: 'Delhi',
      image: require('../assests/images/image3.jpg'),
    },
    {
      name: 'New York',
      image: require('../assests/images/image4.jpg'),
    },
    {
      name: 'London',
      image: require('../assests/images/image5.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../assests/images/image6.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../assests/images/image7.jpg'),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={require('../assests/images/image2.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: '#000'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={40} color="#fff" />
          <Image
            source={require('../assests/images/user.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: '#fff'}}> Hello </Text>
          <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>
            Search the city by the name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#fff',
              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="#fff"
              style={{paddingHorizontal: 10, color: '#fff', fontSize: 15}}
            />
            <TouchableOpacity
              onPress={() => props.navigation.push("Details", {name: city})
              }>
              <Icon name="search" size={25} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              paddingHorizontal: 10,
              marginTop: 220,
              marginBottom: 20,
            }}>
            My Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards name={item.name} image={item.image} navigation={props.navigation} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
