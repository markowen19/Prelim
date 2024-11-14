import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";  
const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[{ marginBottom: 12 }, otherStyles]}>
      
      <Text style={{ fontSize: 12, color: "#D1D1D6", fontWeight: "500" }}>{title}</Text>

    
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "gray",
          height: 48,
          paddingHorizontal: 12,
          width: 200,
        }}
      >
       
        <TextInput
          style={{
            flex: 1,
            fontSize: 16,
            color: "#000",
            fontWeight: "400",
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#B1B1B1"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
