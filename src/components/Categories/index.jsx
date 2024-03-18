import { TouchableOpacity, Text, Image, View } from 'react-native'


function Categories({ title, image, onPress, color }) {
    return (
        <TouchableOpacity>
        <Text style={{ textTransform: 'capitalize' }}>{title}</Text>
          <View onTouchEndCapture={onPress} style={{ marginHorizontal: 10, alignItems: 'center' }}>
            <View
              style={{
                width: 160,
                height: 80,
                borderWidth: 2,
                borderColor: color,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
                backgroundColor: color
              }}
            >
              <Image source={image} style={{ width: 150, height: 70 }} />
            </View>
          </View>
        </TouchableOpacity>
      )
}

export default Categories