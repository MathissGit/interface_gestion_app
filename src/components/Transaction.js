import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, TableFooter, TablePagination, Chip, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../styles/App.css';
import axios from 'axios';

const Transaction = () => {
    const [transactions, setAllTransactions] = useState([]);
    const [usersPerPage, setUsersPerPage] = useState(5);

    useEffect(() => {
        axios.get(`http://localhost:3001/transactions`)
        .then(response => {
            setAllTransactions(response.data); 
        })
        .catch(error => {
            console.error('Il y a eu une erreur!', error);
        });
    }, []);

    return (
        // <div className="fullPageContainer">
        //     <Stack direction="row" style={{ alignItems: 'center' }} spacing={1}>
        //         <h1>Transactions</h1>
        //         <Chip label={`${transactions.length} plans`} />
        //     </Stack>
        //     <TableContainer component={Paper}>
        //         <Table>
        //             <TableHead>
        //                 <TableRow>
        //                     <TableCell style={{ fontWeight: "bold" }} align="left">ID User</TableCell>
        //                     <TableCell style={{ fontWeight: "bold" }} align="left">ID Plan</TableCell>
        //                     <TableCell style={{ fontWeight: "bold" }} align="left">Nom du Patient</TableCell>
        //                     <TableCell style={{ fontWeight: "bold" }} align="left">Plan</TableCell>
        //                     <TableCell style={{ fontWeight: "bold" }} align="left">Prix</TableCell>
        //                 </TableRow>
        //             </TableHead>
        //             <TableBody>
        //                 {transactions.map((transaction) => (
        //                     <TableRow key={transaction.email}>
        //                         <TableCell>{transaction.Id_User}</TableCell>
        //                         <TableCell>{transaction.Id_Plan}</TableCell>
        //                         <TableCell>{transaction.lastname} {transaction.firstname}</TableCell>
        //                         <TableCell>{transaction.plan_name}</TableCell>
        //                         <TableCell>{transaction.plan_cost}</TableCell>
        //                     </TableRow>
        //                 ))}
        //             </TableBody>
        //         </Table>
        //     </TableContainer>
        // </div>
        <div className="fullPageContainer">
        
            <TableContainer component={Paper}>
                <Stack className="header-list" justifyContent="space-between" direction="row" style={{ alignItems: 'center' }} spacing={1}>
                    <Stack direction="row" style={{ alignItems: 'center' }} spacing={1}>
                        <h1>Transaction</h1>
                        <Chip label={`${transactions.length} cours`} />
                    </Stack>
                </Stack>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: "bold" }} align="left">ID User</TableCell>
                            <TableCell style={{ fontWeight: "bold" }} align="left">ID Plan</TableCell>
                            <TableCell style={{ fontWeight: "bold" }} align="left">Nom du Patient</TableCell>
                            <TableCell style={{ fontWeight: "bold" }} align="left">Plan</TableCell>
                            <TableCell style={{ fontWeight: "bold" }} align="left">Prix</TableCell>
                            <TableCell style={{ fontWeight: "bold" }} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction) => (
                        <TableRow key={transaction.email} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{transaction.Id_User}</TableCell>
                            <TableCell>{transaction.Id_Plan}</TableCell>
                            <TableCell>{transaction.lastname} {transaction.firstname}</TableCell>
                            <TableCell>{transaction.plan_name}</TableCell>
                            <TableCell>{transaction.plan_cost}</TableCell>
                            <TableCell align="center">
                                <IconButton aria-label="view" >
                                    <VisibilityIcon />
                                </IconButton>
                                <IconButton aria-label="edit" >
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Transaction;
