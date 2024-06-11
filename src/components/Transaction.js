// src/Transaction.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Simuler la récupération des transactions depuis une API ou une base de données
        const fetchTransactions = async () => {
            const receivedTransactions = [
                { id: 1, patientName: 'John Doe', status: 'Completed', date: '2024-06-10', price: '$200' },
                { id: 2, patientName: 'Jane Smith', status: 'Pending', date: '2024-06-11', price: '$150' },
                { id: 3, patientName: 'Alice Johnson', status: 'Cancelled', date: '2024-06-12', price: '$100' },
            ];
            setTransactions(receivedTransactions);
        };
        fetchTransactions();
    }, []);

    return (
        <Box
            component={Paper}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vh',
                margin: '20px',
                padding: '20px',
                boxSizing: 'border-box',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Transactions
            </Typography>
            <TableContainer component={Paper} sx={{ flexGrow: 1, overflow: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nom du Patient</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Prix</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                                <TableCell>{transaction.id}</TableCell>
                                <TableCell>{transaction.patientName}</TableCell>
                                <TableCell>{transaction.status}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                                <TableCell>{transaction.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Transaction;
