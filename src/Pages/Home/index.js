import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Avatar,
  Caption,
  Card,
  Headline,
  Subheading,
  Title,
} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
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
        <Title>Categorias</Title>

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

      <View style={styles.popularesContainer}>
        <Title>Populares</Title>

        <ScrollView horizontal>
          <TouchableOpacity style={styles.produtoItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.jpg',
                }}
                style={styles.produtoImage}
              />
            </View>
            <Headline style={styles.produtoValorText}>R$ 76,50</Headline>
            <Caption>Hipertrofia</Caption>
            <Caption>Melhora na Recuperação muscular</Caption>
            <Caption>Melhor Custo - Benefício</Caption>
          </TouchableOpacity>

          <TouchableOpacity style={styles.produtoItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.jpg',
                }}
                style={styles.produtoImage}
              />
            </View>
            <Headline style={styles.produtoValorText}>R$ 76,50</Headline>
            <Caption>Hipertrofia</Caption>
            <Caption>Melhora na Recuperação muscular</Caption>
            <Caption>Melhor Custo - Benefício</Caption>
          </TouchableOpacity>

          <TouchableOpacity style={styles.produtoItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.jpg',
                }}
                style={styles.produtoImage}
              />
            </View>
            <Headline style={styles.produtoValorText}>R$ 76,50</Headline>
            <Caption>Hipertrofia</Caption>
            <Caption>Melhora na Recuperação muscular</Caption>
            <Caption>Melhor Custo - Benefício</Caption>
          </TouchableOpacity>

          <TouchableOpacity style={styles.produtoItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.jpg',
                }}
                style={styles.produtoImage}
              />
            </View>
            <Headline style={styles.produtoValorText}>R$ 76,50</Headline>
            <Caption>Hipertrofia</Caption>
            <Caption>Melhora na Recuperação muscular</Caption>
            <Caption>Melhor Custo - Benefício</Caption>
          </TouchableOpacity>

          <TouchableOpacity style={styles.produtoItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/produto/imagem/m_top-whey-protein-concentrado-1kg-growth-supplements.jpg',
                }}
                style={styles.produtoImage}
              />
            </View>
            <Headline style={styles.produtoValorText}>R$ 76,50</Headline>
            <Caption>Hipertrofia</Caption>
            <Caption>Melhora na Recuperação muscular</Caption>
            <Caption>Melhor Custo - Benefício</Caption>
          </TouchableOpacity>
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
    marginTop: hp('2%'),
  },
  categoryItemContainer: {
    margin: wp('2%'),
    flexDirection: 'column',
    alignItems: 'center',
  },

  popularesContainer: { margin: wp('1%'), marginTop: hp('2%') },
  produtoItemContainer: {
    margin: wp('3%'),
    flexDirection: 'column',
    backgroundColor: '#e3e3e3',
    padding: wp('1%'),
    borderRadius: 2,
  },
  produtoImage: {
    minHeight: hp('20%'),
  },
  produtoValorText: {
    color: 'green',
    fontWeight: 'bold',
  },

  // row: {
  //   marginTop: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // section: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginRight: 15,
  // },
});
