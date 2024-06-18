import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Card = ({ imageUri, title, description }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUri }} style={styles.image} />
    <View style={styles.cardContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

export default function Category() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card
        imageUri="https://imgs.search.brave.com/_v6scyXaNxIh7OjFP6OxXYjVUBhXyCty_2flH2LDZwk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEzLzQ4LzU4/LzM2MF9GXzMxMzQ4/NTgzMl9ZeW9mU1c2/NlVVZ01XTzN1Vk1K/NXQwRjRUNGJmUnRH/cC5qcGc"
        title="Shwe San Daw Pagoda"
        description="This is the description for card 1."
      />
      <Card
        imageUri="https://imgs.search.brave.com/IVp-SGn8HyyAhvxrvPtQ8JyFKf1Wrh2gS4R_Ofe0umY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5Mjgy/NTUuanBn"
        title="Da Ma Yan Gyi Pagoda"
        description="This is the description for card 2."
      />
      <Card
        imageUri="https://imgs.search.brave.com/Sh44j_TfoQWdeVi24R67Lp_7emBw7dIjsIKi5B1ndpk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQxOTEw/NzAuanBn"
        title="Ar Nan Dar Pagoda"
        description="This is the description for card 3."
      />
      <Card
        imageUri="https://imgs.search.brave.com/UC1jEKX_g_cn_rsJxSJAlM1VwxheANAvd9LyUrMFe4A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oYXZl/Y2FtZXJhd2lsbHRy/YXZlbC5waG90b2dy/YXBoeS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8xMS9ueWF1/bmctdS1nb2xkZW4t/c3R1cGEtb2Ytc2h3/ZXppZ29uLXBhZ29k/YS1hdC1ueWF1bmct/dS1teWFubWFyLWJ1/cm1hLTI1LWNvcHly/aWdodC1oYXZlY2Ft/ZXJhd2lsbHRyYXZl/bC1jb20uanBn"
        title="Shwe Zi Gon Pagoda"
        description="This is the description for card 3."
      />
            <Card
        imageUri="https://imgs.search.brave.com/_v6scyXaNxIh7OjFP6OxXYjVUBhXyCty_2flH2LDZwk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEzLzQ4LzU4/LzM2MF9GXzMxMzQ4/NTgzMl9ZeW9mU1c2/NlVVZ01XTzN1Vk1K/NXQwRjRUNGJmUnRH/cC5qcGc"
        title="Shwe San Daw Pagoda"
        description="This is the description for card 1."
      />
      <Card
        imageUri="https://imgs.search.brave.com/IVp-SGn8HyyAhvxrvPtQ8JyFKf1Wrh2gS4R_Ofe0umY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5Mjgy/NTUuanBn"
        title="Da Ma Yan Gyi Pagoda"
        description="This is the description for card 2."
      />
            <Card
        imageUri="https://imgs.search.brave.com/Sh44j_TfoQWdeVi24R67Lp_7emBw7dIjsIKi5B1ndpk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQxOTEw/NzAuanBn"
        title="Ar Nan Dar Pagoda"
        description="This is the description for card 3."
      />
      <Card
        imageUri="https://imgs.search.brave.com/UC1jEKX_g_cn_rsJxSJAlM1VwxheANAvd9LyUrMFe4A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oYXZl/Y2FtZXJhd2lsbHRy/YXZlbC5waG90b2dy/YXBoeS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8xMS9ueWF1/bmctdS1nb2xkZW4t/c3R1cGEtb2Ytc2h3/ZXppZ29uLXBhZ29k/YS1hdC1ueWF1bmct/dS1teWFubWFyLWJ1/cm1hLTI1LWNvcHly/aWdodC1oYXZlY2Ft/ZXJhd2lsbHRyYXZl/bC1jb20uanBn"
        title="Shwe Zi Gon Pagoda"
        description="This is the description for card 3."
      />
            <Card
        imageUri="https://imgs.search.brave.com/_v6scyXaNxIh7OjFP6OxXYjVUBhXyCty_2flH2LDZwk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEzLzQ4LzU4/LzM2MF9GXzMxMzQ4/NTgzMl9ZeW9mU1c2/NlVVZ01XTzN1Vk1K/NXQwRjRUNGJmUnRH/cC5qcGc"
        title="Shwe San Daw Pagoda"
        description="This is the description for card 1."
      />
      <Card
        imageUri="https://imgs.search.brave.com/IVp-SGn8HyyAhvxrvPtQ8JyFKf1Wrh2gS4R_Ofe0umY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5Mjgy/NTUuanBn"
        title="Da Ma Yan Gyi Pagoda"
        description="This is the description for card 2."
      />


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginLeft:5,
    marginRight:5,
    elevation: 5,
    marginBottom: 20,
    width: 175,
  },
  image: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  },
});
