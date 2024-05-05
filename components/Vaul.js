export function Vaul({ slot } = {}) {
  return {
    slot: slot,
    showSlot: true,
    toggleSlot() {
      if (!document.startViewTransition) {
        this.showSlot = !this.showSlot
      } else {
        document.startViewTransition(() => (this.showSlot = !this.showSlot))
      }
    },
    $template: /* HTML */ `<div
      class="fixed flex justify-center w-full h-screen z-10 top-0 pointer-events-none"
    >
      <div
        class="w-full max-w-2xl bg-white bg-opacity-80 blur-lg absolute bottom-0 t select-none flex flex-col items-center md:rounded-t-lg s pointer-events-auto hover:bg-opacity-100"
        :class="{'': showSlot}"
      >
        <div @click="toggleSlot" class="px-2 group cp">
          <div
            class="h-2 rounded-full bg-gray-300 w-24 my-2 group-hover:bg-gray-400 t"
          ></div>
        </div>
        <div class="w-full t" v-show="showSlot" v-scope="slot"></div>
      </div>
    </div>`,
  }
}
