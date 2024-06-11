import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Simuler la récupération des messages depuis une API ou une base de données
        const fetchMessages = async () => {
            const receivedMessages = [
                { id: 1, sender: 'Alice', content: 'Hello there!', timestamp: '2024-06-10 10:00' },
                { id: 2, sender: 'Bob', content: 'Hi! How are you?', timestamp: '2024-06-10 11:00' },
                { id: 3, sender: 'Charlie', content: 'Good morning!', timestamp: '2024-06-11 09:00' },
            ];
            setMessages(receivedMessages);
        };
        fetchMessages();
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
                Messages Reçus
            </Typography>
            <List sx={{ overflow: 'auto', flexGrow: 1 }}>
                {messages.map((message) => (
                    <ListItem key={message.id} sx={{ borderBottom: '1px solid #ddd' }}>
                        <ListItemText
                            primary={`${message.sender}: ${message.content}`}
                            secondary={message.timestamp}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Messages;
