import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';
import TypeIcon from './src/components/TypeIcon';
import { ICON_TYPES } from "./src/components/TypeIcon/utils/iconTypes";
import { IMAGE_TYPES } from "./src/components/Categories/utils/imageType";
import Categories from './src/components/Categories';
import Icon from "react-native-vector-icons/FontAwesome";
// import { NavigationContainer } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/core";

export default function App() {

  return (
    <ScrollView>
      <Image style={styles.argolas} source={require('./assets/argolas.png')}/>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MARKETPLACE</Text>
        <Image style={styles.logo_paris} source={require('./assets/logo_paris.png')}/>
        <StatusBar style="auto" />
      </View>

    <View style={styles.container_input}>
      <TextInput style={styles.input} placeholder="Ex.: Bábas"/>
      <Icon
          name="search"
          size={14}
          color="#a8b6c8"
          style={styles.search_icon}
        />
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
        scrollEnabled={false}
        />
      </View>
      
      <View style={styles.container_photo}>
          <Image style={styles.photo_example} source={require('./assets/example.png')}/>
      </View>

      <View>
        <Text style={styles.acess}>Mais Acessados</Text>
      </View>
          <Image style={styles.details} source={require('./assets/details.png')}/>
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
        scrollEnabled={false}
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
  },
  argolas: {
    width: 175,
    height: 229,
    position: 'absolute'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  title: {
    color: "#085E9F",
    fontWeight: "900",
    fontSize: 20,
    left: 30
  },
  logo_paris: {
    width: 60,
    height: 60,
    left: 80
  },
  container_input: {
    width: "90%",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "#ececec",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  input: {
    flex: 1,
    color: "#a8b6c8",
    fontSize: 14,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  search_icon: {
    position: "absolute",
    right: 20,
    marginRight: 10,
  },
  container_menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_photo: {
    width: 370,
    height: 128,
    backgroundColor: '#085E9F',
    borderRadius: 4,
    paddingHorizontal: 50,
    paddingVertical: 50,
    marginTop: 20,
    marginBottom: 20
  },
  photo_example: {
    width: 260,
    height: 118,
    bottom: 45,
    left: 5
  },
  acess: {
    fontWeight: 'bold',
    right: 130
  },
  details: {
    width: 474,
    height: 461,
    position: 'absolute',
    top: 390,
  },
});
