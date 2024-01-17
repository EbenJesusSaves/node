#!/usr/bin/env node
import { determ } from "./testing.js";
import fs from "fs";
const note = process.argv[2];

const newNote = {
  content: note,
  id: Date.now(),
};
console.log(newNote);
