import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function ImageFullScreenScreen({ route, navigation }) {
  const { imageUrl } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome5 name="times" style={styles.closeIcon} />
      </TouchableOpacity>
      <Image source={imageUrl} style={styles.fullScreenImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  closeIcon: {
    fontSize: 24,
    color: 'white',
  },
});

export default ImageFullScreenScreen;
