import React from 'react'
import { View,Text } from 'react-native'
import Jobs from './pages/Jobs/Jobs';
import Detail from './pages/Details/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorite from './pages/Favorite/Favorite';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();




function JobsPage() {
  return(

  <Stack.Navigator>
  <Stack.Screen
      name="JobsPage"
      component={Jobs}
      options={{ headerTitleAlign: 'center', headerTitleStyle: {color: "orange"},  }}
      />
            <Stack.Screen name="DetailPage" component={Detail} />

</Stack.Navigator>
  )
  
}

function FavoritedPage() {
 return(

   <Stack.Navigator>
  
     <Stack.Screen name='FavoritePage' component={Favorite}      options={{
                    headerTitleAlign: "center",
                    headerTintColor: "#EF5350",
                    title: "Favorited"
                }}/>
   </Stack.Navigator>
 )
  
}

export default function Router( ) {
    return (
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{ headerShown: false,}}>
          <Drawer.Screen
          name="JobsPage"
          component={JobsPage}
          options={{ title:"jobs"}}
          />

<Drawer.Screen
          name="FavoritedPage"
          component={FavoritedPage}
          options={{ title:"Favorite"}}
          />
          </Drawer.Navigator>
        </NavigationContainer>
    );
    }