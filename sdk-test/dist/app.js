"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const my_sdk_1 = __importDefault(require("my-sdk"));
const client = new my_sdk_1.default({
    apiKey: "sdfd",
});
client
    .createPost({
    id: 2000,
    title: "string",
    body: "string",
})
    .then((p) => {
    console.log(`Created new post with id ${p}`);
});
