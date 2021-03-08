import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {uiStyle, uiDimen} from 'src/ui/constants';
import {Divider, Space, Button} from 'src/ui/components';

const HomeScreen = () => {
  const isTotal = false;
  return (
    <>
      <SafeAreaView style={uiStyle.baseContainer}>
        <ScrollView>
          <View style={{margin: uiDimen.large}}>
            <View style={styles.imageContainer}>
              <Image
                source={require('src/assets/images/personal_finance.png')}
                style={styles.imageLogo}
              />
            </View>
            <Text style={styles.title}>Personal Financial</Text>
            <Space height={uiDimen.medium} />
            <Divider height={2} />
            <Space height={uiDimen.medium} />
            <View style={{alignItems: 'center'}}>
              <Text>Hi, Ibra</Text>
              <Space height={uiDimen.small} />
              <Text>Selamat Datang</Text>
              <Space height={uiDimen.small} />
              <Text>Catat pengeluaranmu sekarang !!</Text>
            </View>
            <Space height={uiDimen.large} />
            <Button title="Mulai" onPress={() => {}} />
            <Space height={uiDimen.medium} />
            {isTotal === true && (
              <Button title="Total pengeluaran" onPress={() => {}} />
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
});

export default HomeScreen;
