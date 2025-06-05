
//ws pentru appointments

import { WebSocketServer } from "ws"

const ws = new WebSocketServer({ port: 3001 })

const clients = []

ws.on("connection", ws => {
  console.log("Client connected")

  clients.push(ws)

  ws.on("message", function message(data) {
    console.log("received:", data)

    clients.forEach(client => {
      client.send(data.toString())
    })
  })

  //   const interval = setInterval(() => {
  //     ws.send("hello world")
  //   }, 1000)

  ws.on("close", ws => {
    console.log("Client disconnected: ", ws)
  })

  ws.onerror = function () {
    console.log("Some Error occurred")
  }
})

























//AL 2LEA TEST DE WEBSOCKET SERVER<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// import { WebSocketServer } from "ws";

// const ws = new WebSocketServer({ port: 8080 });

// const clients = [];

// ws.on("connection", (ws) => {
// console.log("Client connected");

//     clients.push(ws);

//     ws.on("message", (data) => {
//         console.log(`Message from client: `,
//             data.toString());
//             clients.forEach((client) => {
//             client.send(data.toString());
//         });
//     });

//     ws.on("close", () => {
//         console.log("Client disconected");
//         });
// });
























//PRIMUL TEST DE WEBSOCKET SERVER<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// import { WebSocketServer } from "ws";

// const wss = new WebSocketServer({ port: 8080 });

// wss.on("connection", (ws) => {
// console.log("Client connected");
// ws.on("message", function message(data) {
// console.log("received: %s", data);
// });

// const interval = setInterval(() => {
// ws.send("hello world");
// }, 1000);
// ws.on("close", () => {
// console.log("Client disconnected");
// });
// ws.onerror = function () {
// console.log("Some Error occurred");
// };
// });


//IN TERMINAL-----------------------------------------
//odata ce dau "node  ws/ws-server.js" in terminal
// Server started and listening on ws://localhost:8080
// Client connected
// received: %s hello
// hello world
// hello world
// Client disconnected
// Ctrl c si atat....
// deci functioneaza ca un server de websocket
// si clientul se conecteaza la el si primeste mesaje
// si trimite mesaje
// si se deconecteaza cand inchide clientul
// si serverul se opreste cand inchide terminalul

//IN APP-----------------------------------------

