import React from 'react'
import { StyleSheet, Text,TextInput,TouchableOpacity,View } from 'react-native'
import { COLORS,SIZES } from '../../constants'
import { SliderBox } from "react-native-image-slider-box";

function Carousel() {
    const images = [
        require('../../assets/Slide Image/slide1.jpg'),
        require('../../assets/Slide Image/slide2.jpg'), 
        require('../../assets/Slide Image/slide3.jpg'), 
        require('../../assets/Slide Image/slide3.jpg'), 
    ]

    const renderItem = ({ item }) => (
      <View style={styles.slide}>
        <Image source={item.source} style={styles.image} />
      </View>
    );

  return (
    <View style={styles.container}>
    <Carousel
      layout={'default'}
      data={images}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
    />
  </View>
  )}
export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: 300,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});