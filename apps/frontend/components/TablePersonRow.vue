<template>
  <tr>
    <td class="size-px whitespace-nowrap">
      <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
        <div class="flex items-center gap-x-3">
          <span
            class="inline-flex items-center justify-center size-[38px] rounded-full bg-gray-300 dark:bg-gray-700"
          >
            <span class="font-medium text-gray-800 leading-none dark:text-gray-200">{{
              personName[0].toUpperCase()
            }}</span>
          </span>
          <div class="grow">
            <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{{
              personName
            }}</span>
            <span class="block text-sm text-gray-500">{{ personEmail }}</span>
          </div>
        </div>
      </div>
    </td>
    <td class="h-px w-72 whitespace-nowrap">
      <div class="px-6 py-3">
        <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{{
          personJob
        }}</span>
        <span class="block text-sm text-gray-500">{{ personDepartment }}</span>
      </div>
    </td>
    <td class="size-px whitespace-nowrap">
      <StatusTip :label="personStatus" />
    </td>

    <td class="size-px whitespace-nowrap">
      <div class="px-6 py-3">
        <span class="text-sm text-gray-500">{{ personLastMeeting }}</span>
      </div>
    </td>
    <td class="size-px whitespace-nowrap">
      <div class="px-6 py-1.5">
        <a
          class="inline-flex items-center gap-x-1 text-sm text-indigo-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          Modifier
        </a>
      </div>
    </td>
  </tr>
</template>

<script lang="ts" setup>
const props = defineProps({
  personName: {
    type: String,
    required: true,
  },
  personEmail: {
    type: String,
    required: true,
  },
  personJob: {
    type: String,
    required: true,
  },
  personDepartment: {
    type: String,
    required: false,
  },
  personStatus: {
    type: String,
    default: 'en-cours', // 'restaure', 'en-cours', 'sorti
    validator: (value: string) => {
      return ['restaure', 'en-cours', 'sorti'].includes(value)
    },
  },
  personLastMeeting: {
    type: String,
    required: true,
  },
})
</script>
