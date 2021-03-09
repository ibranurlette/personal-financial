import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {uiColor, uiDimen, uiStyle} from 'src/ui/constants';

const Header = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitleStyle}>Histori Pengeluaran</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerTitleStyle: {
    color: uiColor.white,
    fontSize: 18,
  },
  headerContainer: {backgroundColor: uiColor.accent1, padding: uiDimen.large},
});
