import { Image, FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

type Post = {
  id: string;
  user: string;
  image: string;
  caption: string;
};

const POSTS: Post[] = [
  {
    id: '1',
    user: 'Jane Doe',
    image: 'https://picsum.photos/id/1018/800/600',
    caption: 'Enjoying the sunshine!',
  },
  {
    id: '2',
    user: 'John Smith',
    image: 'https://picsum.photos/id/1025/800/600',
    caption: 'Adventure time!',
  },
  {
    id: '3',
    user: 'Alice',
    image: 'https://picsum.photos/id/1035/800/600',
    caption: 'A beautiful view.',
  },
  {
    id: '4',
    user: 'Bob',
    image: 'https://picsum.photos/id/1043/800/600',
    caption: 'Lunchtime vibes.',
  },
  {
    id: '5',
    user: 'Charlie',
    image: 'https://picsum.photos/id/1062/800/600',
    caption: 'Exploring the city.',
  },
];

export default function TabOneScreen() {
  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.post}>
      <Text style={styles.user}>{item.user}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    marginBottom: 24,
  },
  user: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  caption: {
    margin: 8,
    fontSize: 14,
  },
});
