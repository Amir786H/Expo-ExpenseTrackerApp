import ScreenWrapper from '@/components/ScreenWrapper'
import { spacingX } from '@/constants/theme'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Profile = () => {
  return (
    <ScreenWrapper>
      <Text>Profile</Text>
    </ScreenWrapper>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
  },
  
})