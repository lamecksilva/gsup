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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="Home" component={TabStack} />
      <Stack.Screen name="Cadastro" component={CadastroPage} />
      <Stack.Screen name="Carrinho" component={CarrinhoPage} />
      <Stack.Screen name="Endereco" component={EnderecoPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Pagamento" component={PagamentoPage} />
      <Stack.Screen name="PedidoDetalhes" component={PedidoDetalhesPage} />
      <Stack.Screen name="Produto" component={ProdutoPage} />
      <Stack.Screen name="Rastreio" component={RastreioPage} />
      <Stack.Screen name="MeusPedidos" component={MeusPedidosPage} />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Pesquisar" component={PesquisarPage} />
      <Tab.Screen name="Perfil" component={PerfilPage} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={AppStack} />
      </Drawer.Navigator>
    </NavigationContainer>
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
/* <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> Growth
                  Suplementos
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView> */

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
