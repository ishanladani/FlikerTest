import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, Image, Text, View , FlatList, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchImages} from '../actions/FetchImage';
import { SearchBar } from 'react-native-elements';
import {getFlickrImageURL} from '../Const'

export default function HomeScreen({ navigation }) {
  
  const selctor = useSelector((state) => state);
  const dispatch = useDispatch();
  const [images, setImages] = useState();
  const [isFetching, setIsFetching] = useState();
  const [searchString, setsearchString] = useState();

  

  useEffect(() => {
    console.log('selctor', selctor.imagesReducer.images);
    setImages(selctor.imagesReducer.images);
    setIsFetching(selctor.imagesReducer.isFetching);
  }, [selctor]);

  return (
    <View style={styles.container}>
        <View style={{width: '100%'}}>
        <SearchBar
        placeholder="Type Here..."
        onChangeText={text => setsearchString(text)}
        value={searchString}
      />
        </View>
        
      <Button
        title="Search"
        onPress={() => {
          dispatch(fetchImages(searchString));
        }}
      />
      <FlatList
        data= {images} 
        keyExtriactor={(itme, index) => index.toString()}
        renderItem = {({ item, index })=> 
          {
            return (
              <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailsScreen', item)
              }}
              >
              <View style={styles.imageContainer}>
                  <Image
                   style= {styles.imageBox}
                   source={{uri: getFlickrImageURL(item, 'q')}}
                  />
                  <Text style={styles.imageTitle}>{item.title}</Text>
              </View>
              </TouchableOpacity>
            );
          }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    width: Dimensions.get('window').width/2 - 20,
    height: Dimensions.get('window').width/2 - 20,
  },
  imageContainer: {
    margin: 20,
    width: '100%'
  },
  imageTitle: {
    maxWidth: 100
  }
});
