import { createApp } from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js"

import { store } from "./store.js"
import { Row } from "./components/Row/index.js"
import { Vaul } from "./components/Vaul.js"
import { AddPair } from "./components/AddPair.js"
import { EditMode } from "./components/EditMode.js"

createApp({
  Row,
  Vaul,
  AddPair,
  EditMode,
  store,
}).mount()
