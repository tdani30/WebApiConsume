import React from 'react';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import {signin} from "../ExternalConnectivity/AuthenticationService";
import { TextField} from "@material-ui/core";
//import { useToasts } from "react-toast-notifications";
import {initialFieldLogin} from '../Common/Helper';
import useForm from "./FormConfiguration";

const Login = (props) =>{

  //const { addToast } = useToasts()

  const validate = (fieldValues = values) => {
    
      let temp = { ...errors }
      if ('username' in fieldValues)
          temp.username = fieldValues.username ? "" : "This field is required."
      if ('password' in fieldValues)
          temp.password = fieldValues.password ? "" : "This field is required."
      setErrors({
          ...temp
      })

      if (fieldValues == values)
          return Object.values(temp).every(x => x == "")

          debugger;
  }

  const {
      values,
      errors,
      setErrors,
      handleInputChange,
      resetForm
  } = useForm(initialFieldLogin, validate)

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) 
    {
      signin(values.username, 
          values.password)
      .then(
        (data) => {
          props.history.push('/Dashboard');
          window.location.reload();
          resetForm();
        },
        error => {
          debugger;
          console.log("Login fail: error = { " + error.toString() + " }");
          console.log("Can not signin successfully ! Please check username/password again");
        }
    );
    }
}
  
  return (
    <>
<div>
        <Container fluid>
          <Row style={{marginTop:"20px"}}>
          <Col sm="12" md={{ size: 3, offset: 4 }}>
            <Form  onSubmit={handleSubmit} >
              <FormGroup >
                <Label for="username"><strong>Username</strong></Label>
                <TextField className="formAlignment"
                        name="username" autoFocus
                        variant="outlined"
                        type="text"
                        label="username"
                        value={values.username}
                        onChange={handleInputChange}
                        {...(errors.username && { error: true, helperText: errors.username })}
                    />
               
              </FormGroup>
<br></br>
              <FormGroup>
                <Label for="password"><strong>Password</strong></Label>
                <TextField className="formAlignment"
                        name="password" autoFocus
                        variant="outlined"
                        type="password"
                        type="text"
                        label="password"
                        value={values.password}
                        onChange={handleInputChange}
                        {...(errors.password && { error: true, helperText: errors.password })}
                    />
               
              </FormGroup>
<br></br>
              <Button type="submit" variant="primary" size="lg" block>
                Sign In
              </Button>
            </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}


export default Login;