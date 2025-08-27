"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const indxs_1 = __importDefault(require("./indxs"));
(0, node_server_1.serve)(indxs_1.default, (info) => {
    console.log(`Server is running on ${info.port}`);
});
