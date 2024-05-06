export function Vaul({ slots } = { slots: [] }) {
  return {
    slots,
    showSlot: false,
    toggleSlot() {
      if (!document.startViewTransition) {
        this.showSlot = !this.showSlot
      } else {
        document.startViewTransition(() => (this.showSlot = !this.showSlot))
      }
    },
    $template: /* HTML */ ` <div
      class="fixed flex justify-center w-full h-screen z-10 top-0 pointer-events-none"
    >
      <div
        class="w-full max-w-2xl bg-white bg-opacity-80 blur-lg absolute bottom-0 select-none flex flex-col items-center md:rounded-t-lg pointer-events-auto hover:bg-opacity-100"
        :class="{'': showSlot}"
      >
        <div @click="toggleSlot" class="px-2 group cursor-pointer">
          <div
            class="h-2 rounded-full bg-gray-300 w-24 my-2 group-hover:bg-gray-400"
          ></div>
        </div>
        <div class="w-full" v-show="showSlot">
          <template v-for="slotContent in slots">
            <div v-scope="slotContent"></div>
          </template>
        </div>
      </div>
    </div>`,
  }
}
