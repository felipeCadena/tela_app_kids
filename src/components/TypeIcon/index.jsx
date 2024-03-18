import { TouchableOpacity, Text, Image, View } from 'react-native'

export default function TypeIcon({ title, image, onPress, color }) {

  return (
    <TouchableOpacity>
      <View onTouchEndCapture={onPress} style={{ marginHorizontal: 10, alignItems: 'center' }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
            backgroundColor: color
          }}
        >
          <Image source={image} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={{ textTransform: 'capitalize' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
