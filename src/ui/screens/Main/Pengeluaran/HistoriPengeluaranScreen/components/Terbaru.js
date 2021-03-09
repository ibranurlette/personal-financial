import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {uiDimen, uiStyle, uiColor} from 'src/ui/constants';
import {Input, Space} from 'src/ui/components';
import {formatPrice} from 'src/utils';

const Terbaru = () => {
  const isExist = true;
  const data = [
    {
      name: 'Ibra nurlette',
      time: '29/10/2021',
      amount: 2000000,
    },
    {
      name: 'Naruto uzumaki',
      time: '29/10/2021',
      amount: 4000000,
    },
    {
      name: 'Sasuke uciha',
      time: '29/10/2021',
      amount: 9000000,
    },
    {
      name: 'Shikamaru nara',
      time: '29/10/2021',
      amount: 15000000,
    },
  ];
  return (
    <View style={uiStyle.baseContainer}>
      <View style={{margin: uiDimen.large}}>
        {isExist === true ? (
          <>
            <Input placeholder="Cari histori" />
            <Space height={uiDimen.large} />
            {data.map((item, index) => (
              <View style={styles.cardRow} key={index}>
                <View style={{flex: 1}}>
                  <Text numberOfLines={1} style={styles.cardTitle}>
                    {item.name}
                  </Text>
                  <Text numberOfLines={1} style={styles.cardTitle}>
                    {item.time}
                  </Text>
                </View>
                <Text style={styles.cardTitle}>
                  {formatPrice(Number(item.amount))}
                </Text>
              </View>
            ))}
          </>
        ) : (
          <View style={styles.imageContainer}>
            <Image
              source={require('src/assets/images/empty.png')}
              style={styles.imageLogo}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Terbaru;

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: uiColor.accent2,
    padding: uiDimen.medium,
    borderRadius: uiDimen.small,
    marginBottom: uiDimen.medium,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: uiColor.white,
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageLogo: {
    height: 330,
    resizeMode: 'contain',
  },
});
