import React from 'react'
import { Text,TextInput,TouchableOpacity,View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './welcomStyle';
import { COLORS,SIZES } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function Welcome() {

    const navigation = useNavigation();

  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.welcomeText(COLORS.black)}>Find The Most</Text>
            <Text style={styles.welcomeText(COLORS.prinary,0)}>Luxurious Furniture</Text>
        </View>
        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Feather name="search" size={24} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value=""
                    onPressIn={()=>navigation.navigate("Search")}
                    placeholder='What are you looking for'
                />
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Welcome
