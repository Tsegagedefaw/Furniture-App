import React from 'react'
import { Text,View, TouchableOpacity,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Feather,Ionicons } from '@expo/vector-icons'
import { SIZES,COLORS } from '../../constants'
import styles from './searchStyle'
function Search() {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchIcon}/>
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
                    <Feather  name="search"  color={COLORS.offwhite} size={24}/>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Search
