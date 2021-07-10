import React, { useState,useEffect } from "react";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell,ButtonGroup , TableBody, Button } from "@material-ui/core";

import TablePagination  from './CustomControl/Table-Pagination';
import {GetCovidSummary} from '../ExternalConnectivity/CovidService';

const Header = ['Slug','Code','Country', 'Confirmed', 'Deaths', 'Recovered'];

const CallExternalService = () => {
    const [CovideList, setCovid] = useState([]);

    useEffect(() => {
        GetCovidSummary()
        .then(
          (data) => {
            setCovid(data);
            debugger;
          },
          error => {
            debugger;
            console.log(error);
          }
      );
    }, [])
    
    return (
        <>
        <div className="container">
        <Paper elevation={3}>
        <br></br>
            <Grid container>
                <Grid item xs={6}> 

                    <TableContainer >
                        {(CovideList!=null  && CovideList.length>0) && ( 
                            <TablePagination
                            headers={ Header }
                            data={ CovideList }
                            columns="CountryCode.Country.TotalConfirmed.TotalDeaths.TotalRecovered.Slug"
                            perPageItemCount={ 25 }
                            partialPageCount={ 3 }
                            totalCount={ CovideList.length }
                            arrayOption={ [['size', 'all', ' ']] }
                            nextPageText="Next"
                            prePageText="Prev"
                          />
                        )}
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
        </div>
        </>
        
    );
}


export default CallExternalService;