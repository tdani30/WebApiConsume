import React from 'react';
import { Form, FormGroup, Label } from "reactstrap";
import {Button} from 'react-bootstrap';
import {signin} from "../ExternalConnectivity/AuthenticationService";
import { TextField,Grid} from "@material-ui/core";
import {initialFieldLogin} from '../Common/Helper';
import useForm from "./FormConfiguration";

const Login = (props) =>{


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
<div >
<Grid container>
                <Grid item xs={6}>

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
                  </Grid>
                  </Grid>
      </div>
    </>
  );
}


export default Login;