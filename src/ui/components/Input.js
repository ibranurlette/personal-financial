import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {uiColor, uiDimen} from '../constants';

const Input = ({
  inputRef,
  keyboardType,
  secureTextEntry,
  multiline,
  numberOfLines,
  placeholder,
  value,
  onChangeText,
  maxLength,
  style = {},
  error,
  left,
  right,
  rightButton,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };
  return (
    <>
      {left || right ? (
        <View style={{flexDirection: 'row'}}>
          {left && (
            <View style={styles.leftContainer}>
              <Text style={styles.leftText}>{left}</Text>
            </View>
          )}
          <TextInput
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
            numberOfLines={numberOfLines}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={[styles.inputWithLeft(left, right), {...style}]}
          />
          {rightButton && (
            <View
              style={[
                styles.rightButtonContainer,
                {padding: 0, backgroundColor: 'transparent'},
              ]}>
              {rightButton}
            </View>
          )}
          {right && (
            <View style={styles.rightContainer}>
              <Text style={styles.leftText}>{right}</Text>
            </View>
          )}
        </View>
      ) : (
        <TextInput
          ref={inputRef}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input(isFocus), {...style}]}
        />
      )}
      <View>
        {error &&
          Array.isArray(error) &&
          error.map((item, index) => (
            <Text key={index} style={styles.errorText}>
              {item}
            </Text>
          ))}
        {error && !Array.isArray(error) && (
          <Text style={styles.errorText}>{error}</Text>
        )}
      </View>
    </>
  );
};

export default Input;

Input.propTypes = {
  inputRef: PropTypes.any,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  maxLength: PropTypes.number,
  onChangeText: PropTypes.func,
  style: PropTypes.object,
  error: PropTypes.any,
  left: PropTypes.any,
  right: PropTypes.any,
  rightButton: PropTypes.any,
};

const styles = StyleSheet.create({
  input: (isFocus) => ({
    borderWidth: 1,
    borderRadius: uiDimen.small,
    padding: uiDimen.medium,
    borderColor: uiColor.border,
    fontSize: 16,
    backgroundColor: uiColor.border,
    fontFamily: 'OpenSans-Regular',
    color: uiColor.black,
  }),
  inputWithLeft: (left, right) => ({
    flex: 1,
    borderWidth: 1,
    borderTopLeftRadius: left ? 0 : uiDimen.small,
    borderBottomLeftRadius: left ? 0 : uiDimen.small,
    borderTopRightRadius: right ? 0 : uiDimen.small,
    borderBottomRightRadius: right ? 0 : uiDimen.small,
    padding: uiDimen.medium,
    borderColor: uiColor.border,
    fontSize: 16,
    backgroundColor: uiColor.border,
    fontFamily: 'OpenSans-Regular',
    color: uiColor.black,
  }),
  leftContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: uiDimen.small,
    borderBottomLeftRadius: uiDimen.small,
    padding: uiDimen.medium,
    borderColor: uiColor.accent2,
    backgroundColor: uiColor.accent2,
  },
  leftText: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: uiColor.white,
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: uiDimen.small,
    borderBottomRightRadius: uiDimen.small,
    padding: uiDimen.medium,
    backgroundColor: uiColor.accent1,
  },
  rightButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: uiDimen.small,
  },
  errorText: {
    marginTop: uiDimen.small,
    fontSize: 14,
    color: uiColor.accent1,
    fontFamily: 'OpenSans-Bold',
  },
});
