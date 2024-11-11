import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '@/components/layout/Header';
import Search from '@/components/layout/HomeScreen/Search';
import Suggest from '@/components/layout/HomeScreen/Suggest';
import Content from '@/components/layout/HomeScreen/Content';
import Footer from '@/components/layout/Footer';

const MainPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search />
        <Suggest />
        <Content />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default MainPage;
