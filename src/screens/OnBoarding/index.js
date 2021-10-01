import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';

//Styles
import styles from './styles';
//Utils
import {theme, data} from '../../utils';

//Theme
const {SIZES} = theme;

const OnBoarding = () => {
  //Variable
  const [complete, setComplete] = useState(false);
  const scrollX = new Animated.Value(0);

  //UseEffect
  useEffect(() => {
    scrollX.addListener(({value}) => {
      console.log('value', value / SIZES.width);
      //If user scroll to value === data.length -1 set state complete = true
      if (Math.round(value / SIZES.width) === data.length - 1) {
        setComplete(true);
      } else setComplete(false);
    });
    return () => scrollX.removeListener();
  }, [complete]);

  //CONTENT
  function renderContent() {
    return (
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        scrollEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {data.map((item, index) => (
          <View key={index} style={{width: SIZES.width}}>
            {/* Image */}
            <View style={styles.viewImage}>
              <Image
                source={item.img}
                resizeMode="cover"
                style={styles.img}></Image>
            </View>

            {/* Text */}
            <View style={styles.viewTxt}>
              <Text style={styles.txtTitle}>{item.title}</Text>
              <Text style={styles.txtDes}>{item.description}</Text>
            </View>

            {/* Button */}
            <TouchableOpacity
              style={styles.btnSkip}
              onPress={() => console.log('Đã press')}>
              <Text style={styles.txtSkip}>
                {complete ? "Let's Go" : 'Skip'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  //DOTS
  const renderDot = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotContainer}>
        {data.map((item, index) => {
          const opacityDot = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacityDot}
              style={[
                styles.dots,
                {width: dotSize, height: dotSize},
              ]}></Animated.View>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Content */}
      <View>{renderContent()}</View>

      {/* Dots */}
      <View style={styles.dotRootContainer}>{renderDot()}</View>
    </SafeAreaView>
  );
};

export default OnBoarding;
