import { colors } from '@/constants/theme'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const index = () => {
    // const router = useRouter()
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/welcome')
    //     }, 2000);
    // },[])
  return (
    <View style={styles.container}>
        <Image 
            source={require('../assets/images/money_transfer.png')}
            style={styles.logo}
            resizeMode='contain'
            />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.neutral900,
    },
    logo: {
        height: "18%",
        aspectRatio: 1,
    }
})