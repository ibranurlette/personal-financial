import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from 'react-native';
import hexToRgba from 'hex-to-rgba';

import {uiColor, uiDimen} from '../constants';

const Button = ({
  title,
  onPress,
  isLoading,
  backgroundColor,
  outline,
  disabled,
  style,
  textStyle,
  rightIcon,
  leftIcon,
}) => {
  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[styles.button(backgroundColor, outline, disabled), style]}>
      {isLoading ? (
        <ActivityIndicator color={outline ? uiColor.accent3 : 'white'} />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {leftIcon}
          <Text
            numberOfLines={1}
            style={[styles.buttonText(backgroundColor, outline), textStyle]}>
            {title}
          </Text>
          {rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  backgroundColor: PropTypes.string,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  button: (backgroundColor, outline, disabled) => ({
    backgroundColor: outline
      ? 'transparent'
      : backgroundColor
      ? hexToRgba(backgroundColor, disabled ? '0.3' : '1')
      : hexToRgba(uiColor.accent3, disabled ? '0.3' : '1'),
    borderWidth: outline ? 1 : 0,
    borderColor: !outline
      ? 'transparent'
      : backgroundColor
      ? backgroundColor
      : uiColor.accent3,
    padding: uiDimen.medium,
    alignItems: 'center',
    borderRadius: uiDimen.small,
    justifyContent: 'center',
  }),
  buttonText: (backgroundColor, outline) => ({
    color: !outline
      ? 'white'
      : backgroundColor
      ? backgroundColor
      : uiColor.accent3,
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
  }),
});
