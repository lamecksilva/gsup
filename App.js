/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';

import {
  CadastroPage,
  CarrinhoPage,
  CustomDrawerContent,
  EnderecoPage,
  HomePage,
  LoginPage,
  MeusPedidosPage,
  PagamentoPage,
  PedidoDetalhesPage,
  PerfilPage,
  PesquisarPage,
  ProdutoPage,
  RastreioPage,
} from './src';
import { Appbar } from 'react-native-paper';
import { StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <Appbar.Header style={{ backgroundColor: '#009edf' }}>
              {previous ? (
                <Appbar.BackAction onPress={navigation.goBack} />
              ) : (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    navigation.openDrawer();
                  }}>
                  <Icon size={30} name="navicon" color="#ffffff" />
                </TouchableOpacity>
              )}
              <Appbar.Content
                title={title === 'Home' ? 'Growth Suplementos' : title}
                titleStyle={{
                  fontSize: 18,
                  // fontWeight: 'bold',
                }}
              />
              {!previous && (
                <>
                  <Appbar.Action
                    icon="magnify"
                    color="#ffffff"
                    onPress={() => navigation.navigate('Pesquisar')}
                  />

                  <Appbar.Action
                    icon="cart"
                    color="#ffffff"
                    onPress={() => navigation.navigate('Carrinho')}
                  />
                </>
              )}
            </Appbar.Header>
          );
        },
      }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Cadastro" component={CadastroPage} />
      <Stack.Screen name="Carrinho" component={CarrinhoPage} />
      <Stack.Screen name="Endereco" component={EnderecoPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Pagamento" component={PagamentoPage} />
      <Stack.Screen name="PedidoDetalhes" component={PedidoDetalhesPage} />
      <Stack.Screen name="Produto" component={ProdutoPage} />
      <Stack.Screen name="Rastreio" component={RastreioPage} />
      <Stack.Screen name="Perfil" component={PerfilPage} />
      <Stack.Screen name="Pesquisar" component={PesquisarPage} />
      <Stack.Screen name="Meus Pedidos" component={MeusPedidosPage} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Drawer.Navigator
          drawerType="slide"
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name="Home"
            component={AppStack}
            options={{ swipeEnabled: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

/**
 * Deslogado
 *
 * Home -> Produto -> Carrinho -> Login -> Cadastro -> Endereço -> Pagamento -> Meus Pedidos
 *
 * Logado
 *
 * Home -> Meus Produtos -> Detalhes -> Rastreio
 * Home -> Produto -> Carrinho -> Pagamento -> Meus Pedidos -> Detalhes -> Rastreio
 * Home -> Pesquisar -> Listagem
 * Home -> Categorias -> Listagem
 *
 */
/*
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
*/

export default App;
