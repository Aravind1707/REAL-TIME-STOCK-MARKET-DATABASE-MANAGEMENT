import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080/ws/stocks");

const LiveStockUpdates = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        socket.on("message", (data) => {
            setMessage(data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return <h3>Live Update: {message}</h3>;
};

export default LiveStockUpdates;
