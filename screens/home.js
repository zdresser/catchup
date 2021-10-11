import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'


export default function Home() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>UserName</Text>
      <ScrollView>
        <Text>Group 1</Text>
        <Text>Group 2</Text>
        <Text>Group 3</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    alignItems: 'center',
  }
})