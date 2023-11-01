import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
    const [focused, setFocused] = useState<boolean>(false);
    return (

        <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholderTextColor={Colors.darkText}
            style={[
                {
                    fontFamily: Font["poppins-regular"],
                    fontSize: FontSize.small,
                    paddingVertical: Spacing,
                    paddingHorizontal: Spacing * 2,
                    borderRadius: Spacing,
                    marginVertical: Spacing / 2,
                    // borderColor: Colors.border,
                    borderWidth: 1,
                    width: 350, // Add the border width // Adjust this value to change the vertical margin
                    height: 40,
                },
                focused && {
                    borderWidth: 3,
                    borderColor: Colors.primary,
                    shadowOffset: { width: 4, height: Spacing },
                    shadowColor: Colors.primary,
                    shadowOpacity: 0.2,
                    shadowRadius: Spacing,
                },
            ]}
            {...otherProps}
        />

    );
};

export default AppTextInput;

const styles = StyleSheet.create({});