import React from 'react';
import { ScrollView, Text,TouchableOpacity,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import styles from './homeStyle';
import Welcome from '../components/home/welcom';
import Caurosel from "../components/home/carousel";
function Home() {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24}/>
          <Text style={styles.location}>Addis Ababa</Text>
          <View style={{alignItems:'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
              <TouchableOpacity>
                <Fontisto name='shopping-bag' size={24}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    <ScrollView>
      <Welcome/>
      <Caurosel/>
    </ScrollView>

    </SafeAreaView>
  )
}

export default Home
