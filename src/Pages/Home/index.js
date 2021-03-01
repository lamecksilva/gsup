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
import { produtos } from './produtos';

export function HomePage() {
  return (
    <ScrollView style={styles.screenContainer}>
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
            <TouchableOpacity
              style={styles.categoryItemContainer}
              key={Math.random()}>
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

      <View style={styles.lancamentosContainer}>
        <ScrollView horizontal>
          <TouchableOpacity style={styles.lancamentosItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/banner/4a59a48109f814c3f9d86fe6299c6736.jpg',
                }}
                style={styles.lancamentoImage}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lancamentosItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/banner/843c58b29d5a73052fbb3ad640f2da78.jpg',
                }}
                style={styles.lancamentoImage}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lancamentosItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/banner/c7202daba6ff04c62cc810e863205530.gif',
                }}
                style={styles.lancamentoImage}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lancamentosItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/banner/7152a7db105e43361dac2db538d63079.jpg',
                }}
                style={styles.lancamentoImage}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.popularesContainer}>
        <Title>Populares</Title>

        <ScrollView horizontal>
          {produtos.map((produto) => (
            <TouchableOpacity
              style={styles.produtoItemContainer}
              key={Math.random()}>
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
              <Subheading>{produto.titulo}</Subheading>
              <Headline style={styles.produtoValorText}>
                {produto.valor}
              </Headline>
              {produto.descricao.map((desc) => (
                <>
                  <Caption key={Math.random()}>{desc}</Caption>
                </>
              ))}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.objetivosContainer}>
        <Title>Suplementos ideais para seu Esporte</Title>

        <ScrollView horizontal>
          <TouchableOpacity style={styles.objetivoItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/banner/6bbe44477dfac699a7f2117be4e88418.jpg',
                }}
                style={styles.objetivoImage}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.objetivoItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/banner/a67e9b481f383a34aaed8cb606b55178.jpg',
                }}
                style={styles.objetivoImage}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.objetivoItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://www.gsuplementos.com.br/upload/banner/c7a469548d218a61243dbf47029bb5f7.jpg',
                }}
                style={styles.objetivoImage}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
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
    flexWrap: 'wrap',
    minWidth: wp('18%'),
  },
  produtoImage: {
    minHeight: hp('20%'),
  },
  produtoValorText: {
    color: 'green',
    fontWeight: 'bold',
  },

  lancamentosContainer: { margin: wp('1%'), marginTop: hp('2%') },
  lancamentosItemContainer: {
    margin: wp('3%'),
    backgroundColor: '#e3e3e3',
    padding: wp('1%'),
    borderRadius: 2,
    // minWidth: wp('50%'),
  },
  lancamentoImage: {
    minHeight: hp('25%'),
    minWidth: hp('25%'),
  },

  objetivosContainer: { margin: wp('1%'), marginTop: hp('2%') },
  objetivoItemContainer: {
    margin: wp('3%'),
    backgroundColor: '#e3e3e3',
    padding: wp('1%'),
    borderRadius: 2,
    // minWidth: wp('50%'),
  },
  objetivoImage: {
    minHeight: hp('25%'),
    minWidth: hp('25%'),
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
