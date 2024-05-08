import { getRatio } from "./getRatio.js"

const CloseButton = ({ show, index }) => {
  return {
    show: show,
    delete: () => console.log("Delete", index),
    $template: `<div v-show="show" @click="delete" class="bg-red-600 p-1 px-2 cp hover:bg-red-700">
          x
        </div>`,
  }
}

export const Row = ({ tickers, ratio, index, editMode }) => {
  console.log(tickers)

  return {
    output: "Loading..",
    index: index,
    editMode: editMode,
    CloseButton: CloseButton,
    updateRatio: async function () {
      let new_ratio = null

      if (ratio == null) {
        new_ratio = await getRatio(...tickers)
      } else {
        new_ratio = ratio
      }

      this.output = `1 ${tickers[0]} = ${new_ratio} ${tickers[1]}`
    },
    $template: /* HTML */ `
      <div
        class="font-pt-mono text-black text-opacity-70 w-full md:rounded-md sm:rounded-none flex overflow-hidden"
      >
        <div v-scope="CloseButton({show: editMode, index: index})"></div>
        <div class="px-2 p-1 t cp w-full bg-blue-200 hover:bg-blue-100">
          {{ output }}
        </div>
      </div>
    `,
  }
}
