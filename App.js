import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Center, useColorModeValue } from 'native-base';
import MoviesTab from './components/containers/MoviesTab';
import SearchTab from './components/containers/SearchTab';
import TvShowsTab from './components/containers/TvShowsTab';
import Header from './components/layout/Header';

const windowWidth = Dimensions.get('window').width;
// start of tab view
// code copied from https://docs.nativebase.io/building-tab-view
// ***************
const FirstRoute = () =>
  <MoviesTab />
;

const SecondRoute = () => 
  <SearchTab />
;

const ThirdRoute = () => 
<TvShowsTab />
;  

const initialLayout = {
  width: Dimensions.get('window').width
};
const renderScene = SceneMap({ 
  first: FirstRoute,
  second: SecondRoute, 
  third: ThirdRoute,
});

function Tabs() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([{
    key: 'first',
    title: 'Movies'
  }, {
    key: 'second',
    title: 'Search Results'
  }, {
    key: 'third',
    title: 'TV Shows'
  }]); 

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
        });
        const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
        const borderColor = index === i ? 'cyan.500' : useColorModeValue('coolGray.200', 'gray.400');
        return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
              <Pressable onPress={() => {
            console.log(i);
            setIndex(i);
          }}>
                <Animated.Text style={{
              color
            }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>;
      })}
      </Box>;
  };

  return <TabView navigationState={{
    index,
    routes
  }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} style={{
    marginTop: StatusBar.currentHeight
  }} />;
}
// end of tab view
// ***************

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <StatusBar style="auto" />
        <Tabs width={windowWidth} />
    </NativeBaseProvider>
  );
}
