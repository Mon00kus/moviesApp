import React from 'react';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';
/* import { FullMovie } from '../../../core/entities/movie.entity'; */
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../config/theme/app-theme';

interface Props {
  //movie : FullMovie;
  originalTitle : string;
  title: string;
  poster: string;
}

export const MovieHeader = ({ originalTitle, title, poster }: Props) => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const { height : screenHeight } = useWindowDimensions();
// eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unused-vars
const navigation = useNavigation();
return (
  <>
    <View style = {{...styles.imageContainer, height: screenHeight*0.7}}>
      <View style={ styles.imageBorder }>        
        <Image 
          style={styles.posterImage}
          source = {{uri: poster}}          
        />
      </View>
      <View>
        <Text style={styles.subTitle}>{originalTitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.backButton}>
        <Pressable onPress= {()=> navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
      </View>
    </View>
  </>
)};
