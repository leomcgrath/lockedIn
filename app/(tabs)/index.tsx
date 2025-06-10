import { Image, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import { supabase } from '@/lib/supabase';

import { Text, View } from '@/components/Themed';

type Post = {
  id: string;
  user: string;
  image: string;
  caption: string;
  bio: string;
  url: string;
};

export default function TabOneScreen() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const { data, error } = await supabase.from('posts').select('*');
      if (!error && data) {
        setPosts(data as Post[]);
      }
    };

    loadPosts();
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.post}>
      <Text style={styles.user}>{item.user}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.caption}>{item.caption}</Text>
      <Text style={styles.bio}>{item.bio}</Text>
      <Text style={styles.url}>{item.url}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
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
  bio: {
    marginHorizontal: 8,
    fontSize: 12,
    color: '#666',
  },
  url: {
    marginHorizontal: 8,
    fontSize: 12,
    color: '#1e90ff',
  },
});
