import { getRatio } from "./getRatio.js"

export const Row = (tickerOne, tickerTwo, index, showDelete) => {
  return {
    output: "Loading..",
    index: index,
    showDelete: showDelete,
    tickerOne: tickerOne,
    tickerTwo: tickerTwo,
    updateRatio: async function () {
      const ratio = await getRatio(this.tickerOne, this.tickerTwo)
      this.output = `1 ${tickerOne} = ${ratio} ${tickerTwo}`
    },
    $template: /* HTML */ `
      <div
        class="font-pt-mono  t text-black text-opacity-70 w-full md:rounded-md sm:rounded-none flex overflow-hidden"
      >
        <div
          v-show="showDelete"
          class="bg-red-600 p-1 px-2 cp hover:bg-red-700"
        >
          x
        </div>
        <div class="px-2 p-1 cp w-full bg-blue-200 hover:bg-blue-100">
          {{ output }}
        </div>
      </div>
    `,
  }
}
