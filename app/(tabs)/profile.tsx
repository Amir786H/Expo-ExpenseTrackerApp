import Header from '@/components/Header'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import { useAuth } from '@/contexts/authContext'
import { getProfileImage } from '@/services/imageService'
import { accountOptionType } from '@/types'
import { verticalScale } from '@/utils/styling'
import { Image } from 'expo-image'
import * as Icons from 'phosphor-react-native'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Profile = () => {
  const { user } = useAuth();

  const accountsOptions: accountOptionType[] = [
    {
      title: "Edit Profile",
      icon: (
        <Icons.User size={26} color={colors.white} weight='fill' />
      ),
      routeName: '/(modals)/profileModal',
      bgColor: "#6366f1",
    },
    {
      title: "Settings",
      icon: (
        <Icons.GearSix size={26} color={colors.white} weight='fill' />
      ),
      // routeName: '/(modals)/profileModal',
      bgColor: "#059669",
    },
    {
      title: "Privacy Policy",
      icon: (
        <Icons.Lock size={26} color={colors.white} weight='fill' />
      ),
      // routeName: '/(modals)/profileModal',
      bgColor: colors.neutral600,
    },
    {
      title: "Logout",
      icon: (
        <Icons.Power size={26} color={colors.white} weight='fill' />
      ),
      // routeName: '/(modals)/profileModal',
      bgColor: "#e11d48",
    },
  ]

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* header */}
        <Header title="Profile" style={{ marginVertical: spacingY._10 }} />

        {/* User info */}
        <View style={styles.userInfo}>
          {/* avatar */}
          <View>
            {/* user image */}
            <Image
              source={getProfileImage(user?.image)}
              style={styles.avatar}
              contentFit="cover"
              transition={100}
            />
          </View>
          {/* name & email */}
          <View style={styles.nameContainer}>
            <Typo size={24} fontWeight={'600'} color={colors.neutral100}>
              {user?.name}
            </Typo>
            <Typo size={15} color={colors.neutral400}>
              {user?.email}
            </Typo>
          </View>
        </View>

        {/* account options */}
        <View style={styles.accountOptions}>
          {
            accountsOptions.map((item, index) => {
              return (
                <View key={index} >
                  <Typo>
                    {item.title}
                  </Typo>
                </View>
              )
            })
          }
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
  },
  userInfo: {
    marginTop: verticalScale(30),
    alignItems: 'center',
    gap: spacingY._15
  },
  avatarContainer: {
    position: 'relative',
    alignSelf: 'center',
  },
  avatar: {
    alignSelf: "center",
    backgroundColor: colors.neutral300,
    height: verticalScale(135),
    width: verticalScale(135),
    borderRadius: 200
  },
  editIcon: {
    position: "absolute",
    bottom: 5,
    right: 8,
    borderRadius: 50,
    backgroundColor: colors.neutral100,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },

  },
  nameContainer: {
    gap: verticalScale(4),
    alignItems: 'center',
  },
  listIcon: {
    height: verticalScale(44),
    width: verticalScale(44),
    backgroundColor: colors.neutral500,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius._15,
    borderCurve: "continuous"
  },
  listItem: {
    marginBottom: verticalScale(17),
  },
  accountOptions: {
    marginTop: spacingY._35,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._10
  }
})