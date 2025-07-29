import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsSceen } from '../screens/details/DetailsSceen';

export type RootStackParams = {
  Home: undefined;
  Details: {movieId: number}
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
       screenOptions = {{
          headerShown: false
       }}
     >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsSceen} />
    </Stack.Navigator>
  );
}