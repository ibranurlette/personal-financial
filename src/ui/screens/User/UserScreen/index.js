import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {uiColor} from 'src/ui/constants';

const UserScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Text>hai ibra :</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: uiColor.background,
  },
});

export default UserScreen;
