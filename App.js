import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Search from './screens/Search';
import Write from './screens/Write';
import MyPage from './screens/MyPage';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon name="home" color={focused ? 'black' : 'gray'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon name="search" color={focused ? 'black' : 'gray'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Write"
        component={Write}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon name="flame-sharp" color={focused ? 'black' : 'gray'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon name="people" color={focused ? 'black' : 'gray'} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [token, setToken] = useState(null); // 초기 상태를 null로 설정

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AsyncStorage.getItem('access_token');
        if (response) {
          setToken('Main');
        } else {
          setToken('SignIn');
        }
      } catch (err) {
        console.log("에러임", err);
        setToken('SignIn'); // 에러 발생 시 기본적으로 SignIn으로 설정
      }
    };

    fetchData();
  }, []);

  if (token === null) {
    // 로딩 상태 표시를 위해 null 체크
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={token}>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ 
            headerShown: false,
            gestureEnabled: false // 슬라이드로 뒤로 가기 비활성화
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ 
            headerShown: false,
            gestureEnabled: false 
          }}
        />
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ 
            headerShown: false,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
