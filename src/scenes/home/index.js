import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {Typography} from '../../styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text
        style={{
          fontSize: Typography.FONT_SIZE_16,
          fontWeight: Typography.FONT_WEIGHT_BOLD,
        }}>
        This is the home screen
      </Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('AboutScreen')} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default HomeScreen;
