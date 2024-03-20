import { TouchableOpacity, Text, Image, View } from 'react-native'

export default function TypeIcon({ title, image, onPress, color }) {

  return (
    <TouchableOpacity>
      <View onTouchEndCapture={onPress} style={{ marginHorizontal: 10, alignItems: 'center' }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
            backgroundColor: color
          }}
        >
          <Image source={image} style={ title === 'babás' ? { width: 29, height: 41 } : { width: 35, height: 35}} />
        </View>
        <Text style={{ textTransform: 'capitalize' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
