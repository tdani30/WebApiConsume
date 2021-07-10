import React, { useEffect } from "react";
import { Grid, TextField, withStyles, Button} from "@material-ui/core";
import useForm from "./FormConfiguration";
import { connect } from "react-redux";
import * as actions from "../ExternalConnectivity/Services";
import { useToasts } from "react-toast-notifications";
import {initialFieldValues,styles} from '../Common/Helper';


const UserForm = ({ classes, ...props }) => {

    const { addToast } = useToasts()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile ? "" : "This field is required."
        if ('username' in fieldValues)
            temp.username = fieldValues.username ? "" : "This field is required."
        if ('password' in fieldValues)
            temp.password = fieldValues.password ? "" : "This field is required."
        if ('age' in fieldValues)
            temp.age = fieldValues.age ? "" : "This field is required."        
        if ('email' in fieldValues){
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
            temp.email = fieldValues.email ? "" : "This field is required."
        }
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                addToast("Submitted successfully", { appearance: 'success' })
            }
            if (props.currentId == 0){
                props.createDCandidate(values, onSuccess)
            }
            else
            {
                props.updateDCandidate(props.currentId, values, onSuccess)
            }
        }
    }

    
    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.dCandidateList.find(x => x.id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])


    return (
        <>
        <div className="row">
        <form autoComplete="off" noValidate className={classes.root}  onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="fullName"
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        {...(errors.fullName && { error: true, helperText: errors.fullName })}
                    />
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        {...(errors.email && { error: true, helperText: errors.email })}
                    />
                  <TextField
                        name="username"
                        variant="outlined"
                        label="Username"
                        value={values.username}
                        onChange={handleInputChange}
                        {...(errors.username && { error: true, helperText: errors.username })}
                    />
                    <TextField
                        name="password"
                        variant="outlined"
                        label="Password"
                        type="password"
                        value={values.password}
                        onChange={handleInputChange}
                        {...(errors.password && { error: true, helperText: errors.password })}
                    />
                </Grid>
                <Grid item xs={6}>

                    <TextField
                        name="mobile"
                        variant="outlined"
                        label="Mobile"
                       
                        value={values.mobile}
                        onChange={handleInputChange}
                        {...(errors.mobile && { error: true, helperText: errors.mobile })}
                    />
                    <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        type="number"
                        value={values.age}
                        onChange={handleInputChange}
                        {...(errors.age && { error: true, helperText: errors.age })}
                    />
                    <TextField
                        name="address"
                        variant="outlined"
                        label="Address"
                        value={values.address}
                        onChange={handleInputChange}
                        {...(errors.address && { error: true, helperText: errors.address })}
                    />
                   
                </Grid>
                <Grid item xs={7}>
                <div className="col-sm-4">
                    
                    <br></br>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit" 
                            className={classes.smMargin}>
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.smMargin}
                            onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
        </div>
       </>
    );
}
const mapStateToProps = state => ({
    dCandidateList: state.User.list
})

const mapActionToProps = {
    createDCandidate: actions.create,
    updateDCandidate: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(UserForm));