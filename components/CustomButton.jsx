import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const CustomButton = ({ title, handlePress, containerStyles }) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: 'orange', 
          height: 40, 
          width: 150, 
          justifyContent: 'center', 
          alignItems: 'center', 
          borderRadius: 8, 
        },
        containerStyles, 
      ]}
      onPress={handlePress}
    >
      <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
