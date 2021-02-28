import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Drawer, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://avatars.githubusercontent.com/u/31391753?s=460&u=a6e0882809436f6786055b6ae69da89ba36b10be&v=4',
            }}
            size={50}
          />
          <Title style={styles.title}>Lameck Sandro</Title>
          {/* <Caption style={styles.caption}>@trensik</Caption> */}
          {/* <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                202
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                159
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View> */}
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="rocket" color={color} size={size} />
            )}
            label="Meus Pedidos"
            onPress={() => props.navigation.navigate('MeusPedidos')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="wrench" color={color} size={size} />
            )}
            label="Configurações"
            onPress={() => {}}
          />
          {/* <DrawerItem
            icon={({ color, size }) => (
              <Icon name="cloud" color={color} size={size} />
            )}
            label="Bookmarks"
            onPress={() => {}}
          /> */}
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#009edf',
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
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
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
