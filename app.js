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
  pair_sets: [{ tickers: ["BTC", "ETH"], ratio: null }],
  editMode: false,
  toggleEdit() {
    this.editMode = !this.editMode

    this.refreshPairs()
  },
  async refreshPairs() {
    const pair_sets = this.pair_sets
    this.pair_sets = []

    await this.$nextTick()

    this.pair_sets = pair_sets
  },
}).mount()
