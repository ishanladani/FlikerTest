import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Image, Text, View , FlatList, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchImages} from '../actions/FetchImage';
import { SearchBar } from 'react-native-elements';


export default function HomeScreen() {
  
  const selctor = useSelector((state) => state);
  const dispatch = useDispatch();
  const [images, setImages] = useState();
  const [isFetching, setIsFetching] = useState();
  const [searchString, setsearchString] = useState();

  const getFlickrImageURL = (photo, size) => {
    let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${
    photo.secret
    }`;
    if (size) {
    // Configure image size
    url += `_${size}`;
    }
    url += '.jpg';
    return url;
};

  useEffect(() => {
    console.log('selctor', selctor.imagesReducer.images);
    setImages(selctor.imagesReducer.images);
    setIsFetching(selctor.imagesReducer.isFetching);
  }, [selctor]);

  return (
    <View style={styles.container}>
      {/* <SearchBar
          round
          searchIcon={{ size: 24 }}
          inputStyle={{backgroundColor: 'white'}}
          containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
          inputContainerStyle={{backgroundColor: 'white'}}
          onChangeText={text => setsearchString(text)}
          // onClear={text => setsearchString('')}
          placeholderTextColor={'#g5g5g5'}
          placeholder={'Pritish Vaidya'}
          value={setsearchString}
        /> */}
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
              <View style={styles.imageContainer}>
                  <Image
                   style= {styles.imageBox}
                   source={{uri: getFlickrImageURL(item, 'q')}}
                  />
                  <Text style={styles.imageTitle}>{item.title}</Text>
              </View>
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
