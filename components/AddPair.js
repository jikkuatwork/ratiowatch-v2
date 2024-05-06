export function AddPair({ store }) {
  return {
    tickerOne: "",
    tickerTwo: "",
    get isFormComplete() {
      return this.tickerOne !== "" && this.tickerTwo !== ""
    },
    add() {
      if (this.isFormComplete) {
        store.pairs.push([this.tickerOne, this.tickerTwo])
        this.tickerOne = ""
        this.tickerTwo = ""
      }
    },
    $template: /* HTML */ `<div class="w-full px-4 py-2">
      <div class="text-xs text-black text-opacity-80 mb-1">Add Pair</div>
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
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </div>`,
  }
}
