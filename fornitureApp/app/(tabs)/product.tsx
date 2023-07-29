import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { Product } from '@/models/product';
import { renderItem } from '@/components/product_item';
 

type ItemProps = { title: string };
const Item = ({ title }: ItemProps) => (
  <View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function TabTwoScreen() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(resulted =>{ 
        console.log(resulted)
      setData(resulted.products)
    
     });
  }, []);

  return (
    <View style={styles.container}>
      {data&&<FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />}
    </View>
  );
}


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
