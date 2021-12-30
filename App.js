// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Registermenu from './pages/Registermenu';
import RegisterUser from './pages/RegisterUser';
import RegisterUser1 from './pages/RegisterUser1';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import loginscreen from './pages/loginscreen';
import video from './pages/video';
import login from './pages/login';
import category from './pages/category';
import tablestudent from './pages/tablestudent';
import adminview from './pages/adminview';
import tableteacher from './pages/tableteacher';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginscreen">
        <Stack.Screen
          name="Registermenu"
          component={Registermenu}
          options={{
            title: 'Sa.Ra.', //Set Header Title
            headerStyle: {
              backgroundColor: '#1569C7', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewUser}
          options={{
            title: 'View User', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllUser}
          options={{
            title: 'View Users', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateUser}
          options={{
            title: 'Update User', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: 'Register Student', //Set Header Title
            headerStyle: {
              backgroundColor: '#1569C7', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Register1"
          component={RegisterUser1}
          options={{
            title: 'Register Teacher', //Set Header Title
            headerStyle: {
              backgroundColor: '#1569C7', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteUser}
          options={{
            title: 'Delete User', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
            name="loginscreen"
            component={loginscreen}
            options={{
              title: 'loginscreen', //Set Header Title
              headerStyle: {
                backgroundColor: '#1569C7', //Set Header color
            },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
            },
           }}
        />
        <Stack.Screen
            name="login"
            component={login}
            options={{
              title: 'login', //Set Header Title
              headerStyle: {
                backgroundColor: '#1569C7', //Set Header color
                    },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
            },
          }}
        />
         <Stack.Screen
            name="category"
            component={category}
            options={{
              title: 'Category you like', //Set Header Title
              headerStyle: {
                backgroundColor: '#1569C7', //Set Header color
                    },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
            },
            }}
        />
          <Stack.Screen
            name="tablestudent"
            component={tablestudent}
            options={{
              title: 'tablestudent', //Set Header Title
              headerStyle: {
                backgroundColor: '#1569C7', //Set Header color
                    },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
            },
            }}
        />
        <Stack.Screen
            name="adminview"
            component={adminview}
            options={{
              title: 'adminview', //Set Header Title
              headerStyle: {
                backgroundColor: '#1569C7', //Set Header color
                    },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
            },
            }}
        />
        <Stack.Screen
            name="tableteacher"
            component={tableteacher}
            options={{
              title: 'tableteacher', //Set Header Title
              headerStyle: {
                backgroundColor: '#1569C7', //Set Header color
                    },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
            },
            }}
        />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
