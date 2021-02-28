import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Card, Subheading } from 'react-native-paper';
import {
  // heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { categorias } from './categorias';

export function HomePage() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.bannerContainer}>
        <Card.Cover
          source={{
            uri:
              'https://www.gsuplementos.com.br/upload/banner/5d5d8a24a440cef2860dc1d44f27556d.png',
          }}
        />
      </View>

      <View style={styles.categoriasContainer}>
        <ScrollView horizontal>
          {categorias.map((categoria) => (
            <TouchableOpacity style={styles.categoryItemContainer}>
              <View>
                <Avatar.Image
                  source={{
                    uri: categoria.uri,
                  }}
                />
              </View>
              <Subheading style={styles.categoryItemText}>
                {categoria.nome}
              </Subheading>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bannerContainer: {
    height: 'auto',
    backgroundColor: '#696969',
  },
  categoriasContainer: {
    margin: wp('1%'),
  },
  categoryItemContainer: {
    margin: wp('2%'),
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
});
