import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

type RootTabsParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Tabs = createMaterialTopTabNavigator<RootTabsParamList>();

export default function RootTabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons color={props.color} name="grid-view" />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons color={props.color} name="home" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
