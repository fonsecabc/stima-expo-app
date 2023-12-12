import { Linking, Platform, Share } from 'react-native'

export const shareRemoteLink = (whatsappLink: string, message: string, url: string) => {
  if (Platform.OS === 'web') {
    Linking.openURL(whatsappLink)
    return
  }
  
  Share.share({
    message,
    url
  })
}