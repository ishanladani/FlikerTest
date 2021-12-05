import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {getFlickrImageURL} from '../Const'



export default function DetailsScreen({ route, navigation }) {
  
  useEffect(() => {
    console.log('Detail Screen',route.params);
  })
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: getFlickrImageURL(route.params, 'q'),
          }} 
        />
        <Text>{route.params.title}</Text>
        <View>
          <Text>
            Details
          </Text>
          <Text> "owner" : {route.params.owner}</Text>
          <Text> "ispublic" : {route.params.ispublic}</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      margin: 10
    },
    logo: {
      width: '100%',
      height: '50%',
    },
  });
