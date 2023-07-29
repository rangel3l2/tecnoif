import { StyleSheet, Text, Image, View } from "react-native";
import { Product } from "@/models/product";
export const renderItem = ({ item }: { item: Product }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.brand}</Text>
        <Image source={{ uri: item.thumbnail }} style={{ width: 200, height: 200 }} />
        <Text style={styles.title}>{item.category}</Text>
        <Text style={styles.title}>{item.description}</Text>
        <Text style={styles.title}>{item.price}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  