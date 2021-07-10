import React from 'react'
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import { store } from "../Redux/Store";
import { Provider } from "react-redux";
import UserList from './UserList';
import AppNavbar from './AppNavbar';

export default function Dashboard() {
    return (
        <>
        <AppNavbar/>
             <div className="app">
          <div className="ui grid container">
          <div className="container">
       <Provider store={store}>
        <ToastProvider autoDismiss={true}>
          <Container maxWidth="lg">
            <UserList />
          </Container>
        </ToastProvider>
      </Provider>
       </div>

          </div>
          </div>
        </>
    )
}
