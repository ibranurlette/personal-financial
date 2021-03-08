import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

import {uiColor, uiDimen, uiStyle} from '../constants';
import Space from './Space';

const InfoCard = ({IconLeft, title, text}) => {
  return (
    <View style={styles.card}>
      {IconLeft && (
        <>
          <View style={styles.iconCircle}>{IconLeft}</View>
          <Space width={uiDimen.medium} />
        </>
      )}

      <View style={styles.textWrapper}>
        {title && (
          <>
            <Text style={uiStyle.formLabel}>{title}</Text>
            <Space width={uiDimen.small} />
          </>
        )}
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  IconLeft: PropTypes.any,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: uiColor.accent3,
    padding: uiDimen.medium,
    borderRadius: uiDimen.small,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconCircle: {
    backgroundColor: uiColor.accent1,
    width: uiDimen.medium * 2,
    height: uiDimen.medium * 2,
    borderRadius: uiDimen.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: uiColor.textLight,
  },
});
