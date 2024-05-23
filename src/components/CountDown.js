// CountDown.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const CountDown = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleDateChange = (_, date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = selectedDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <DateTimePicker
        value={selectedDate}
        mode="datetime"
        display="spinner"
        onChange={handleDateChange}
      />
      <Text style={styles.countdownText}>
        Countdown: {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
        {countdown.seconds}s
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  countdownText: {
    fontSize: 18,
  },
});

export default CountDown;
