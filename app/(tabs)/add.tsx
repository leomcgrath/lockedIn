import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import { supabase } from '@/lib/supabase';

export default function AddPostScreen() {
  const [user, setUser] = useState('');
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const [bio, setBio] = useState('');
  const [url, setUrl] = useState('');

  const submit = async () => {
    if (!user || !image) return;
    await supabase.from('posts').insert({ user, image, caption, bio, url });
    setUser('');
    setImage('');
    setCaption('');
    setBio('');
    setUrl('');
    router.push('/(tabs)/index');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="User" value={user} onChangeText={setUser} style={styles.input} />
      <TextInput placeholder="Image URL" value={image} onChangeText={setImage} style={styles.input} />
      <TextInput placeholder="Caption" value={caption} onChangeText={setCaption} style={styles.input} />
      <TextInput placeholder="Bio" value={bio} onChangeText={setBio} style={styles.input} />
      <TextInput placeholder="URL" value={url} onChangeText={setUrl} style={styles.input} />
      <Button title="Post" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
});
