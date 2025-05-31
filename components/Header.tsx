import { HeaderProps } from '@/types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Typo from './Typo'

const Header = ({ title = "", leftIcon, style }: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      {/* <Typo>Header</Typo> */}
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      {
        title && (
          <Typo
            // numberOfLines={1}
            size={20}
            fontWeight={"600"}
            style={{
              textAlign: "center",
              width: leftIcon ? "82%" : "100%",
              marginHorizontal: leftIcon ? 50 : 0,
            }}
          >
            {title}
          </Typo>
        )
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  leftIcon: {
    alignSelf: "flex-start",
  }
})