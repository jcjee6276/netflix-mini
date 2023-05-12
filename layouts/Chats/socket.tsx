import { useState, useEffect } from 'react';
import io,{Socket} from 'socket.io-client';
import React, { createContext, useContext } from 'react';

type Socket = any;
const socket = io('http://192.168.0.15:3091');
const SocketContext = createContext<Socket | null>(socket);

export function useSocket(): Socket {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error('Socket context not found!');
  }
  return socket;
}

interface SocketProviderProps {
  socket: Socket;
  children: React.ReactNode;
}

export function SocketProvider({
  socket,
  children,
}: SocketProviderProps): JSX.Element {
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}
