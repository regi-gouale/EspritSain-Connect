<template>
  <div class="px-6 py-3">
    <span
      class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
      v-show="isRestaure"
    >
      <svg
        class="size-2.5"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
        />
      </svg>
      Restauré
    </span>
    <span
      class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500"
      v-show="isEnCours"
    >
      <svg
        class="size-2.5"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 22q-2.05 0-3.875-.788t-3.187-2.15q-1.363-1.362-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175Q6.3 3.575 8.124 2.788T12 2q.425 0 .713.288T13 3q0 .425-.288.713T12 4Q8.675 4 6.337 6.338T4 12q0 3.325 2.338 5.663T12 20q3.325 0 5.663-2.337T20 12q0-.425.288-.712T21 11q.425 0 .713.288T22 12q0 2.05-.788 3.875t-2.15 3.188q-1.362 1.362-3.175 2.15T12 22"
        />
      </svg>
      En cours
    </span>
    <span
      class="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500"
      v-show="isSorti"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"
        />
      </svg>
      Sorti du parcours
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
    validator: (value: string) => {
      return ['en-cours', 'restaure', 'sorti'].includes(value)
    },
  },
})

const isEnCours = computed(() => props.label === 'en-cours')
const isRestaure = computed(() => props.label === 'restaure')
const isSorti = computed(() => props.label === 'sorti')
</script>
