<template>
  <div class="flex flex-row">
    <h1
      class="basis-1/4 py-2 px-4 block text-2xl mx-auto font-bold text-black dark:text-white sm:text-2xl"
    >
      {{ label }}
    </h1>
    <input
      type="text"
      class="basis-1/2 py-2 px-4 mx-4 rounded-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      :placeholder="'Rechercher des ' + label.toLocaleLowerCase()"
    />
    <button
      class="py-2 px-4 mx-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-indigo-600"
    >
      <IconsAddPerson v-show="isAddPerson" />
      <IconsAddCalendar v-show="isAddCalendar" />
    </button>
  </div>
  <hr class="my-8 border-gray-200 dark:border-gray-600" />
</template>

<script lang="ts" setup>
import { defineProps, computed, ref } from 'vue'
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: 'Bien-aimé',
  },
  icon: {
    type: String,
    required: false,
    default: 'bien-aime',
    validator: (value: string) => {
      return ['bien-aime', 'rendez-vous'].includes(value)
    },
  },
})
const isAddPerson = computed(() => props.icon === 'bien-aime')
const isAddCalendar = computed(() => props.icon === 'rendez-vous')
</script>
