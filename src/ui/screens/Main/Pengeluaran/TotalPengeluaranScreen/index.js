import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Picker,
} from 'react-native';

import {uiColor, uiStyle, uiDimen} from 'src/ui/constants';
import {Space, Divider} from 'src/ui/components';

import {formatPrice} from 'src/utils';

const TotalPengeluranScreen = () => {
  const [selectedValue, setSelectedValue] = useState('januari');

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
    <>
      <SafeAreaView style={uiStyle.baseContainer}>
        <ScrollView>
          <View style={{margin: uiDimen.large}}>
            <Text style={styles.title}>Total pengeluaran anda</Text>
            <Space height={uiDimen.large} />
            <View style={styles.pickerContainer}>
              <Picker
                mode="dropdown"
                style={{
                  height: 50,
                  width: '100%',
                }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="Januari" value="Januari" />
                <Picker.Item label="Februari" value="Februari" />
                <Picker.Item label="Maret" value="Maret" />
                <Picker.Item label="April" value="April" />
                <Picker.Item label="Mei" value="Mei" />
                <Picker.Item label="Juni" value="Juni" />
                <Picker.Item label="Juli" value="Juli" />
              </Picker>
            </View>
            <Space height={uiDimen.large} />
            <View
              style={{
                backgroundColor: uiColor.border,
                padding: uiDimen.large,
                borderRadius: uiDimen.small,
              }}>
              <Text
                style={{fontSize: 24, textAlign: 'center', fontWeight: 'bold'}}>
                Rp. 150.000.00
              </Text>
            </View>
            <Space height={uiDimen.large} />
            <Divider height={3} />
            <Space height={uiDimen.medium} />
            <Text>Pengeluaran Terakhir</Text>
            <Space height={uiDimen.medium} />
            {isExist === true ? (
              <>
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  imageLogo: {
    height: 330,
    resizeMode: 'contain',
  },
  title: {textAlign: 'center', fontWeight: 'bold', fontSize: 22},
  pickerContainer: {
    backgroundColor: uiColor.border,
    paddingHorizontal: uiDimen.small + 2,
    paddingVertical: uiDimen.medium / 2,
    borderColor: uiColor.border,
    borderRadius: uiDimen.small,
  },
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

export default TotalPengeluranScreen;
