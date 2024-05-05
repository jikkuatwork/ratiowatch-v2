export function AddPair() {
  return {
    tickerOne: "",
    tickerTwo: "",
    get isFormComplete() {
      return this.tickerOne !== "" && this.tickerTwo !== ""
    },
    add() {
      if (this.isFormComplete) {
        console.log(this.tickerOne, this.tickerTwo)
      }
    },
    $template: /* HTML */ `<div class="w-full px-4 py-2">
      <div class="text-md mb-2">Add Pair</div>
      <div class="flex gap-2 mb-2">
        <input
          v-model="tickerOne"
          type="text"
          name="ticker-one"
          id="ticker-one"
          placeholder="From"
          class="w-full rounded border bg-white py-1 px-2 text-base outline-none focus:border-blue-100 focus:shadow-sm"
        />
        <input
          v-model="tickerTwo"
          type="text"
          name="ticker-two"
          id="ticker-two"
          placeholder="To"
          class="w-full rounded border bg-white py-1 px-2 text-base outline-none focus:border-blue-100 focus:shadow-sm"
        />
        <div
          @click="add"
          class="p-2 rounded t"
          :class="{'bg-black text-white bg-opacity-90 cp': isFormComplete, 'bg-gray-100 text-gray-300': !isFormComplete}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
      </div>
    </div>`,
  }
}
