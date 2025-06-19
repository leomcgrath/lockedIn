import { Image, FlatList, StyleSheet, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
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
      <View style={styles.actions}>
        <Pressable>
          <FontAwesome name="heart-o" size={24} color="#ff3333" />
        </Pressable>
      </View>
      <Text style={styles.caption}>{item.caption}</Text>
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
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
});
