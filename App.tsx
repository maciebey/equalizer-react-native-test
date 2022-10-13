/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  Button,
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// const { RNSound } = NativeModules;
var Sound = require('./sound');

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const EqBand: React.FC<
  PropsWithChildren<{
    title: number;
    onPress: any;
  }>
> = ({title, onPress}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Button title="Up" onPress={() => onPress(title, 100)}></Button>
      <Text>{title}</Text>
      <Button title="Down" onPress={() => onPress(title, -100)}></Button>
      {/* <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
      </Text> */}
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  var whoosh = new Sound('rain.mp3', Sound.MAIN_BUNDLE, (error:any) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    whoosh.play((success:any) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPress = () => {
    whoosh.play();
  };

  const onPress2 = () => {
    whoosh.pause();
  };

  const onPress3 = () => {
    console.log('We will invoke the native module here!');
    whoosh.bands((res:any)=>{
      console.log(typeof res)
      console.log(res)
      console.log(res["key"])
    });
  };

  const onPress4 = (band: number, change: number) => {
    whoosh.setBandLevel(band, change, (res:any)=>{
      console.log(typeof res)
      console.log(res)
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            <Button title="play" onPress={onPress}></Button>
            <Text>-</Text>
            <Button title="pause" onPress={onPress2}></Button>
            <Text>-</Text>
            <Button title="bands" onPress={onPress3}></Button>
            <Text>-</Text>
            <EqBand title={0} onPress={(b:any,c:any) => onPress4(b,c)}></EqBand>
            <EqBand title={1} onPress={(b:any,c:any) => onPress4(b,c)}></EqBand>
            <EqBand title={2} onPress={(b:any,c:any) => onPress4(b,c)}></EqBand>
            <EqBand title={3} onPress={(b:any,c:any) => onPress4(b,c)}></EqBand>
            <EqBand title={4} onPress={(b:any,c:any) => onPress4(b,c)}></EqBand>
            {/* <Button title="up" onPress={() => onPress4(4, 100)}></Button>
            <Text>-</Text>
            <Button title="down" onPress={() => onPress4(4, -100)}></Button> */}
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
