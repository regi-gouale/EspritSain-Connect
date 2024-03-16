<template>
  <a :class="changeClasses" :href="href" aria-current="page" @click="handleClick">{{ text }}</a>
</template>

<script lang="ts" setup>
import { defineProps, computed, defineEmits } from 'vue'
const props = defineProps({
  href: {
    type: String,
    required: true,
    default: '#',
  },
  icon: {
    type: String,
    required: true,
    default: 'home',
  },
  text: {
    type: String,
    required: true,
    default: 'Accueil',
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
})

function handleClick() {
  emit('update:isActive', true)
  console.log('Status: ', props.isActive)
  navItemClasses(props.isActive)
  navigateTo(props.href)
}

const changeClasses = computed(() => {
  return navItemClasses(props.isActive)
})

function navItemClasses(selected: boolean = false) {
  return [
    'font-medium',
    { 'text-gray-500': selected === false, 'text-indigo-500': selected === true },
    {
      'hover:text-gray-400': selected === false,
      'hover:text-indigo-800': selected === true,
    },
    'md:py-6',
    {
      'dark:text-gray-400': selected === false,
      'dark:text-indigo-500': selected === true,
    },
    {
      'dark:hover:text-gray-500': selected === true,
      'dark:hover:text-indigo-800': selected === false,
    },
  ]
}

const emit = defineEmits(['update:isActive'])
</script>
