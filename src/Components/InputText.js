import React from 'react';
import {View, StyleSheet, Text, I18nManager, TextInput} from 'react-native';
// import TextFlipper from './TextFlipper';
// import TextStyle from './TextStyle';

const InputText = props => {
  const {
    label,
    isOptonal,
    error,
    errorMessage,
    disabled = false,
    placeholder,
    onChangeText,
    value,
    type = 'text',
    keyboardType = 'default',
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {/* <Text style={error ? styles.errorText : null}>*</Text> */}

        <Text style={error ? styles.errorText : styles.nonErrorText}>
          {label}
        </Text>
      </View>
      <View error={error} regular style={styles.itemStyle}>
        <TextInput
          secureTextEntry={type === 'password'}
          style={[styles.input, disabled ? styles.disabled : {}]}
          {...props}
          value={value}
          placeholderTextColor="#FFF"
          placeholder={placeholder}
          onChangeText={onChangeText}
          type={type}
          keyboardType={keyboardType}
          autoCapitalize={keyboardType == 'default' ? 'words' : 'none'}
          isDisabled={disabled}
          passwordRules={
            type == 'password'
              ? 'required: upper; required: lower; required: digit; required: [-]; minlength: 8;'
              : null
          }
        />
      </View>
      {error && <Text style={styles.errorMessageText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textContainer: {paddingVertical: 10, flexDirection: 'row'},
  itemStyle: {borderRadius: 10, borderWidth: 1, borderColor: '#E5E5E5'},
  text: {textAlign: 'left'},
  disabled: {color: '#757575'},
  input: {
    fontSize: 14,
    height: 48,
    width: '100%',
    paddingHorizontal: 10,
    color: '#FFF',
  },
  errorText: {fontSize: 14, fontWeight: 'bold', color: 'red'},
  errorMessageText: {
    color: 'red',
    marginTop: 5,
    textAlign: 'center',
  },
  nonErrorText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0.5,
  },
});

export default InputText;
