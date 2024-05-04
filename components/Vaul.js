function DefaultPanel({ title, subTitle }) {
  return {
    title: title,
    subTitle: subTitle,
    $template: /* HTML */ `
      <div class="w-full px-4 py-2">
        <div class="text-md text-black text-opacity-80">{{ title }}</div>
        <div class="text-sm text-black text-opacity-80">{{ subTitle }}</div>
      </div>
    `,
  }
}

export function Vaul({ slot = DefaultPanel } = {}) {
  return {
    slot: slot,
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
        @click="toggleSlot"
        class="w-full max-w-2xl bg-white bg-opacity-80 blur-lg absolute bottom-0 t cp select-none flex flex-col items-center md:rounded-t-lg s pointer-events-auto group hover:bg-opacity-100"
        :class="{'': showSlot}"
      >
        <div
          class="h-2 rounded-full bg-gray-300 w-48 my-2 group-hover:bg-gray-400 t"
        ></div>
        <div
          class="w-full"
          v-show="showSlot"
          v-scope="slot({title: 'Vaul', subTitle: 'Simple example to show the power of nested components'})"
        ></div>
      </div>
    </div>`,
  }
}
/*
      class="fixed flex justify-center w-full h-screen z-10 top-0 pointer-events-none"
    >
      <div
        @click="toggleSlot"
        class="w-full max-w-2xl bg-white bg-opacity-80 blur-lg absolute bottom-0 transition-opacity duration-300 ease-in-out transform transition-transform duration-300 ease-in-out cp select-none flex flex-col items-center md:rounded-t-lg pointer-events-auto group hover:bg-opacity-100"
        :class="{'opacity-0 translate-y-full': !showSlot, 'opacity-100 translate-y-0': showSlot}"
      >
        <div
          class="h-2 rounded-full bg-gray-300 w-48 my-2 group-hover:bg-gray-400"
        ></div>
        <div
          class="w-full"
          v-show="showSlot"
          v-scope="slot({title: 'Vaul', subTitle: 'Simple example to show the power of nested components'})"
        ></div>
      </div>
    </div>`,
  }
}
*/
