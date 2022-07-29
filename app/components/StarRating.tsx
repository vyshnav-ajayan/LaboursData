import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';

export const StarRating = (props: any) => {
  return (
    <View style={styles.customRatingBarStyle}>
      {props.totalRatings.map((item: any) => {
        return (
          <TouchableOpacity
            activeOpacity={0.6}
            key={item}
            onPress={() => props.onChangeRating(item)}>
            <Image
              style={styles.starImgStyle}
              source={
                item <= props.currentRating
                  ? require('../assets/star_filled.png')
                  : require('../assets/star_corner.png')
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  starImgStyle: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
    marginRight: 5,
  },
});

export default styles;
