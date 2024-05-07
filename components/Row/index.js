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

export const Row = (tickerOne, tickerTwo, index, editMode) => {
  return {
    output: "Loading..",
    index: index,
    editMode: editMode,
    tickerOne: tickerOne,
    tickerTwo: tickerTwo,
    CloseButton: CloseButton,
    updateRatio: async function () {
      const ratio = await getRatio(this.tickerOne, this.tickerTwo)
      this.output = `1 ${tickerOne} = ${ratio} ${tickerTwo}`
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
