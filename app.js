import {
  createApp,
  reactive,
} from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js"

import { Row } from "./components/Row/index.js"
import { Vaul } from "./components/Vaul.js"
import { AddPair } from "./components/AddPair.js"
import { EditMode } from "./components/EditMode.js"
import { getRatio } from "./components/Row/getRatio.js"

createApp({
  Row,
  Vaul,
  AddPair,
  EditMode,
  pair_sets: [
    { tickers: ["BTC", "ETH"], ratio: 20 },
    { tickers: ["ETC", "FTM"], ratio: 40 },
    { tickers: ["BNB", "SOL"], ratio: 4 },
  ],
  editMode: false,
  toggleEdit() {
    this.editMode = !this.editMode

    this.refreshPairs()
  },
  updateRatio: async function () {
    let new_ratio = null

    if (this.ratio == null) {
      console.log("ratio: ", this.ratio)

      new_ratio = await getRatio(...tickers)
    } else {
      new_ratio = this.ratio
    }

    this.output = `1 ${tickers[0]} = ${new_ratio} ${tickers[1]}`
    this.ratio = new_ratio
  },
  async refreshPairs() {
    const pair_sets = this.pair_sets
    this.pair_sets = []

    await this.$nextTick()

    this.pair_sets = pair_sets
  },
}).mount()
