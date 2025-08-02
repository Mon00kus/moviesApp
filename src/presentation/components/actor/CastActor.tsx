import React from 'react';
import { Image, Text, View } from 'react-native';
import { Cast } from '../../../core/entities/cast.entity';
import { styles } from '../../../config/theme/app-theme';

interface Props {
  actor: Cast;
}

export const CastActor = ({ actor }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: actor.avatar }}
        style={{ width: 100, height: 150, borderRadius: 10 }}
      />
      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{actor.name}</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  );
};
