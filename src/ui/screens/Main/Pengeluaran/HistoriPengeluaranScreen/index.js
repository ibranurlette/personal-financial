import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Dimensions} from 'react-native';

import {TabBar, TabView} from 'react-native-tab-view';

import {uiStyle, uiColor} from 'src/ui/constants';

import Header from './components/Header';
import Semua from './components/Semua';
import Terbaru from './components/Terbaru';

const {width} = Dimensions.get('screen');

const HistoriPengeluaranScreen = () => {
  const [activeTab, setActiveTab] = useState(0);

  const routesTab = [
    {key: 'Semua', title: 'Semua'},
    {key: 'Terbaru', title: 'Terbaru'},
  ];

  const renderScene = (nav) => {
    switch (nav.route.key) {
      case 'Semua':
        return <Semua />;
      case 'Terbaru':
        return <Terbaru />;

      default:
        return null;
    }
  };

  return (
    <>
      <SafeAreaView style={uiStyle.baseContainer}>
        <Header />
        <TabView
          navigationState={{index: activeTab, routes: routesTab}}
          renderScene={renderScene}
          onIndexChange={(index) => setActiveTab(index)}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{backgroundColor: uiColor.accent1}}
              indicatorStyle={styles.indicatorStyle}
              renderLabel={({route: routeTab}) => (
                <Text style={styles.tabLable}>{routeTab.title}</Text>
              )}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  tabLable: {
    color: uiColor.white,
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
  indicatorStyle: {
    backgroundColor: uiColor.white,
    width: width * 0.29,
    marginHorizontal: width * 0.1,
    alignItems: 'center',
  },
});

export default HistoriPengeluaranScreen;
