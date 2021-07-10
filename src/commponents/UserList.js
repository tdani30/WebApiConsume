import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../ExternalConnectivity/Services";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell,ButtonGroup , TableBody, Button } from "@material-ui/core";
import UserForm from "./UserForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";



const UserList = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllDCandidates();
    }, [])//componentDidMount
    
    //toast msg.
    const { addToast } = useToasts()

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteDCandidate(id,()=>addToast("Deleted successfully", { appearance: 'info' }))
    }
    return (
        <>
        <div className="container">
        <Paper elevation={3}>
        <UserForm {...({ currentId, setCurrentId })} />
        <br></br>
        <br></br>
            <Grid container>
                <Grid item xs={6}> 

                    <TableContainer className="table-responsive text-nowrap">
                  
                        <Table className="table table-bordered">
                            <TableHead className="table table-striped">
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>UserName</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.UserList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.mobile}</TableCell>
                                            <TableCell>{record.age}</TableCell>
                                            <TableCell>{record.username}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                        onClick={() => { setCurrentId(record.id) }} /></Button>
                                                    <Button><DeleteIcon color="secondary"
                                                        onClick={() => onDelete(record.id)} /></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
        </div>
        </>
        
    );
}

const mapStateToProps = state => ({
    UserList: state.User.list
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
    deleteDCandidate: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)((UserList));