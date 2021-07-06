import React from "react"
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import UserList from './commponents/UserList';

function App() {
    return (
      <Provider store={store}>
        <ToastProvider autoDismiss={true}>
          <Container maxWidth="lg">
            <UserList />
          </Container>
        </ToastProvider>
      </Provider>
    );
  }
export default App