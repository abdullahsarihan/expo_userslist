import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

import PropTypes from "prop-types";

const Title = ({ isVisible, text, color, numberOfLines }) => {
  return (
    <>
      <View>
        {isVisible && (
          <Text style={[styles.title, { color: color }]}>
            {numberOfLines} - {text}
          </Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 700,
  },
});

Title.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number,
  color: PropTypes.string,
  isVisible: PropTypes.bool,
};

Title.defaultProps = {
  text: "Varsayılan Başlık",
  isVisible: true,
  color: "blue",
};

export default Title;
