import { getRatio } from "./getRatio.js"

export const Row = (tickerOne, tickerTwo) => {
  return {
    output: "Loading..",
    tickerOne: tickerOne,
    tickerTwo: tickerTwo,
    updateRatio: async function () {
      const ratio = await getRatio(this.tickerOne, this.tickerTwo)
      this.output = `1 ${tickerOne} = ${ratio} ${tickerTwo}`
    },
    $template: /* HTML */ `
      <div
        class="p-2 font-pt-mono cp bg-blue-200 hover:bg-blue-100 t text-black text-opacity-70 w-full md:rounded-md sm:rounded-none"
      >
        {{ output }}
      </div>
    `,
  }
}
