import {
  createApp,
  reactive,
} from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js"

import { Row } from "./components/Row/index.js"
import { Vaul } from "./components/Vaul.js"
import { AddPair } from "./components/AddPair.js"
import { EditMode } from "./components/EditMode.js"

const greetings = ["Hola", "Namaskaram", "Aadab", "Shukriya"]

createApp({
  Row,
  Vaul,
  AddPair,
  EditMode,
  pairs: [
    ["BTC", "ETH"],
    ["SOL", "FTM"],
  ],
  editMode: false,
  count: 0,
  message: "Hello",
  toggleEdit() {
    this.editMode = !this.editMode

    this.refreshPairs()
  },
  async refreshPairs() {
    const pairs = this.pairs
    this.pairs = []

    await this.$nextTick()

    this.pairs = pairs
  },
}).mount()
