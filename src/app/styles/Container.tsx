import { Colors } from './Colors'
import { FontSizes } from './Fonts'
import { Shadows } from './Shadows'
import { StyleSheet } from 'react-native'

export const Containers = StyleSheet.create({
  default: {
    flex: 1,
    margin: 0,
    borderRadius: 16,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    height: 100,
    ...Shadows.default
  },
  listItem: {
    marginBottom: 10,
    paddingHorizontal: 20,
    height: FontSizes.md * 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: Colors.white,
  },
  listItemSkeleton: {
    marginBottom: 10,
    paddingHorizontal: 20,
    height: FontSizes.md * 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    width: '100%',
  }
})