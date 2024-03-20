import { TouchableOpacity, Text, Image, View } from 'react-native'


function Categories({ title, image, onPress, color }) {
    return (
        <TouchableOpacity>
        <Text style={{ textTransform: 'capitalize', fontSize: 10, fontWeight: 'bold', left: 20, top: 22, zIndex: 1 }}>{title}</Text>
          <View onTouchEndCapture={onPress} style={{ marginHorizontal: 10, alignItems: 'center' }}>
            <View
              style={{
                width: 175,
                height: 95,
                borderWidth: 2,
                borderColor: color,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: color
              }}
            >
              <Image source={image} style={{ width: 160, height: 80 }} />
            </View>
          </View>
        </TouchableOpacity>
      )
}

export default Categories