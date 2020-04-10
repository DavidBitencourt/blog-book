import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import Home from "./pages/Home";
import ListPost from "./pages/ListPost";
import LoginEmail from "./pages/Login/LoginEmail";
import LoginPassword from "./pages/Login/LoginPassword";
import EndRegistration from "./pages/Register/EndRegistration";
import RegisterEmail from "./pages/Register/RegisterEmail";
import RegisterName from "./pages/Register/RegisterName";
import RegisterPassword from "./pages/Register/RegisterPassword";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="LoginEmail" component={LoginEmail} />
        <AppStack.Screen name="LoginPassword" component={LoginPassword} />
        <AppStack.Screen name="RegisterName" component={RegisterName} />
        <AppStack.Screen name="RegisterEmail" component={RegisterEmail} />
        <AppStack.Screen name="RegisterPassword" component={RegisterPassword} />
        <AppStack.Screen name="EndRegistration" component={EndRegistration} />
        <AppStack.Screen name="ListPost" component={ListPost} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
