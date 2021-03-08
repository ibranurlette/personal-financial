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
import {Input, Space, Button} from 'src/ui/components';

const UserScreen = () => {
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
            <Space height={uiDimen.large} />
            <Text>Masukkan nama kamu</Text>
            <Space height={uiDimen.medium} />
            <Input placeholder="Ibra Nurlette" />
            <Space height={uiDimen.large} />
            <Button title="Simpan" onPress={() => {}} />
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

export default UserScreen;
