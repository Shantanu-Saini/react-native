import * as React from 'react';
import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FlatListItem from './components/FlatListItem';

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#495E57" }}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        {/* <MenuItems /> */}
        <FlatListItem />
      </View>
      <View>
        <LittleLemonFooter />
      </View>
    </>
  );
}