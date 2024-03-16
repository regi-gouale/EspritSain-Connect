<template>
  <header class="flex mx-8 flex-wrap md:justify-center md:flex-nowrap z-50 text-sm">
    <nav
      class="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <a
          class="flex-none text-xl pl-8 font-bold text-indigo-800 dark:text-indigo-400"
          href="#"
          aria-label="{{ title }}"
          >{{ title }}</a
        >
        <div class="md:hidden">
          <button
            type="button"
            class="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <IconsMenu />
          </button>
        </div>
      </div>
      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7"
        >
          <NavItem
            v-for="navItem in navItems"
            :key="navItem.text"
            :href="navItem.href"
            :icon="navItem.icon"
            :text="navItem.text"
            :isActive="navItem.isActive"
            @update:isActive="navItem.isActive = $event"
          ></NavItem>
          <a
            class="flex items-center gap-x-2 pr-8 font-medium text-gray-500 hover:text-indigo-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
            href="#"
          >
            <IconsLogin />
            Se connecter
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
})

let navItems = reactive([
  { href: '/', icon: 'home', text: 'Accueil', isActive: false },
  { href: '/bien-aimes', icon: 'heart', text: 'Bien-aimés', isActive: false },
  { href: '/rendez-vous', icon: 'calendar', text: 'Rendez-vous', isActive: false },
])
</script>
