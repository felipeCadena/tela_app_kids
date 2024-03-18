import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';
import TypeIcon from './src/components/TypeIcon';
import { ICON_TYPES } from "./src/components/TypeIcon/utils/iconTypes";
import { IMAGE_TYPES } from "./src/components/Categories/utils/imageType";
import Categories from './src/components/Categories';


export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MARKETPLACE</Text>
        <Image style={styles.logo_paris} source={require('./assets/logo_paris.png')}/>
        <StatusBar style="auto" />
      </View>

    <View>
      <TextInput style={styles.input} placeholder="Ex.: Bábas"></TextInput>
    </View>

      <View style={styles.container_menu}>
        <FlatList
        data={ICON_TYPES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TypeIcon
            onPress={(id) => handleSelected(item.id, item.name)}
            title={item.name}
            image={item.icon}
            color={item.color}
          />
        )}
        columnWrapperStyle={{ justifyContent: "center" }}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        />
      </View>
      
      <View style={styles.container_photo}>
          <Text>FOTOGRÁFO EXEMPLE</Text>
      </View>

      <View>
        <Text>Mais Acessados</Text>
      </View>

      <View style={styles.container_menu}>
        <FlatList
        data={IMAGE_TYPES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Categories
            onPress={(id) => handleSelected(item.id, item.name)}
            title={item.name}
            image={item.icon}
            color={item.color}
          />
        )}
        columnWrapperStyle={{ justifyContent: "center" }}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50
  },
  title: {
    color: "#085E9F",
    fontWeight: "900",
    fontSize: 18,
  },
  logo_paris: {
    width: 50,
    height: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 150,
    paddingVertical: 3,
    fontSize: 18,
  },
  container_menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  container_photo: {
    color: 'white',
    backgroundColor: '#085E9F',
    borderRadius: 4,
    paddingHorizontal: 150,
    paddingVertical: 50,
    marginTop: 40
  }
});
