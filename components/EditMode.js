export function EditMode({ toggle }) {
  return {
    toggle: toggle,
    $template: /* HTML */ `<div
      @click="toggle"
      class="p-2 bg-red-600 text-white text-opacity-60"
    >
      Edit
    </div>`,
  }
}
