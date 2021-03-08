import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {uiColor, uiStyle, uiDimen} from 'src/ui/constants';
import {Input, Space, Button} from 'src/ui/components';

const NotaPengeluaranScreen = () => {
  return (
    <>
      <SafeAreaView style={uiStyle.baseContainer}>
        <ScrollView>
          <View style={{margin: uiDimen.large}}>
            <Text>Nama</Text>
            <Space height={uiDimen.medium} />
            <Input placeholder="Ibra Nurlette" />
            <Space height={uiDimen.large} />
            <Text>Tanggal / bulan / tahun</Text>
            <Space height={uiDimen.medium} />
            <Input placeholder="07/03/2021" />
            <Space height={uiDimen.large} />
            <Text>Amount</Text>
            <Space height={uiDimen.medium} />
            <Input
              placeholder="150.000.00"
              keyboardType="number-pad"
              left="Rp"
            />

            <Space height={uiDimen.large} />
            <Button title="Simpan" onPress={() => {}} />
            <Space height={uiDimen.large} />
            <Button
              backgroundColor={uiColor.red}
              title="Reset"
              onPress={() => {}}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default NotaPengeluaranScreen;
