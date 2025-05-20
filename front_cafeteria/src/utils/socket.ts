import {io} from "socket.io-client";

const socket = io("http://25.4.40.124:3000");

export default socket;