import * as React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { API, AWSCloudWatchProvider, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { listPublicData } from '../src/graphql/queries';
import Banner from '../Components/Banner';

type PublicData = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type ListPublicDataQuery = {
  listPublicData: {
    items: PublicData[];
  };
};

function RecipesScreen({ navigation }) {
  const [data, setData] = useState<PublicData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listPublicData)) as GraphQLResult<ListPublicDataQuery>;
      console.log('Fetched data:', result.data);
      if (result.data) {
        setData(result.data.listPublicData.items);
        console.log('Set data:', result.data.listPublicData.items);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }: { item: PublicData }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {item.image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Banner />
      <Text style={styles.welcomeText}>this is recipes screen</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'black',
    fontFamily: 'Avenir Next',
    fontWeight: '700',
    fontSize: 30,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  container: {
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: '#D9E0F3',
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  gridsContainer: {
    backgroundColor: 'white',
    width: '70%',
    height: '12%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RecipesScreen;