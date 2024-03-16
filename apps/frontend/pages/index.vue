<template>
  <body class="bg-white dark:bg-slate-800 h-full">
    <div class="max-w-[72rem] flex flex-col mx-auto size-full">
      <main id="content" role="main">
        <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
          <div class="flex flex-row">
            <h1
              class="basis-1/4 py-2 px-4 block text-2xl mx-auto font-bold text-black dark:text-white sm:text-2xl"
            >
              Bien Aimés
            </h1>
            <input
              type="text"
              class="basis-1/2 py-2 px-4 mx-4 rounded-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="Rechercher un bien-aimé"
            />
            <button
              class="basis-1/4 py-2 px-4 mx-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-indigo-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
              </svg>
              Bien Aimé
            </button>
          </div>
          <hr class="my-8 border-gray-200 dark:border-gray-600" />
          <!-- Table Section -->
          <div class="max-w-[72rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-8 mx-auto">
            <!-- Card -->
            <div class="flex flex-col">
              <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                  <div class="bg-whiteshadow-sm overflow-hidden dark:bg-slate-800">
                    <!-- Table -->
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td class="size-px whitespace-nowrap">
                            <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div class="flex items-center gap-x-3">
                                <img
                                  class="inline-block size-[38px] rounded-full"
                                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                  alt="Image Description"
                                />
                                <div class="grow">
                                  <span
                                    class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                    >Loïc Essonghé</span
                                  >
                                  <span class="block text-sm text-gray-500"
                                    >christina@site.com</span
                                  >
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="h-px w-72 whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                >Responsable</span
                              >
                              <span class="block text-sm text-gray-500">Ressources humaines</span>
                            </div>
                          </td>
                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
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
                            </div>
                          </td>
                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span class="text-sm text-gray-500">28 Dec, 12:12</span>
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

                        <tr>
                          <td class="size-px whitespace-nowrap">
                            <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div class="flex items-center gap-x-3">
                                <img
                                  class="inline-block size-[38px] rounded-full"
                                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                  alt="Image Description"
                                />
                                <div class="grow">
                                  <span
                                    class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                    >Sarah Couti</span
                                  >
                                  <span class="block text-sm text-gray-500">david@site.com</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="h-px w-72 whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                >STAR</span
                              >
                              <span class="block text-sm text-gray-500">Branding products</span>
                            </div>
                          </td>
                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500"
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
                                    d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                  />
                                </svg>
                                En cours
                              </span>
                            </div>
                          </td>

                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span class="text-sm text-gray-500">20 Dec, 09:27</span>
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

                        <tr>
                          <td class="size-px whitespace-nowrap">
                            <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div class="flex items-center gap-x-3">
                                <span
                                  class="inline-flex items-center justify-center size-[38px] rounded-full bg-gray-300 dark:bg-gray-700"
                                >
                                  <span
                                    class="font-medium text-gray-800 leading-none dark:text-gray-200"
                                    >A</span
                                  >
                                </span>
                                <div class="grow">
                                  <span
                                    class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                    >Noellha Diambou</span
                                  >
                                  <span class="block text-sm text-gray-500">anne@site.com</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="h-px w-72 whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                >Designer</span
                              >
                              <span class="block text-sm text-gray-500">IT department</span>
                            </div>
                          </td>
                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
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
                            </div>
                          </td>

                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span class="text-sm text-gray-500">18 Dec, 15:20</span>
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

                        <tr>
                          <td class="size-px whitespace-nowrap">
                            <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div class="flex items-center gap-x-3">
                                <img
                                  class="inline-block size-[38px] rounded-full"
                                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                                  alt="Image Description"
                                />
                                <div class="grow">
                                  <span
                                    class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                    >Marie Rufine Ebengue</span
                                  >
                                  <span class="block text-sm text-gray-500">samia@site.com</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="h-px w-72 whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                >Executive director</span
                              >
                              <span class="block text-sm text-gray-500">Marketing</span>
                            </div>
                          </td>
                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
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
                            </div>
                          </td>

                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span class="text-sm text-gray-500">18 Dec, 15:20</span>
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

                        <tr>
                          <td class="size-px whitespace-nowrap">
                            <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div class="flex items-center gap-x-3">
                                <span
                                  class="inline-flex items-center justify-center size-[38px] rounded-full bg-gray-300 dark:bg-gray-700"
                                >
                                  <span
                                    class="font-medium text-gray-800 leading-none dark:text-gray-200"
                                    >D</span
                                  >
                                </span>
                                <div class="grow">
                                  <span
                                    class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                    >Romarique Aïhou</span
                                  >
                                  <span class="block text-sm text-gray-500">david@site.com</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="h-px w-72 whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                >Developer</span
                              >
                              <span class="block text-sm text-gray-500">Mobile app</span>
                            </div>
                          </td>
                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500"
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
                          </td>
                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span class="text-sm text-gray-500">15 Dec, 14:41</span>
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

                        <tr>
                          <td class="size-px whitespace-nowrap">
                            <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div class="flex items-center gap-x-3">
                                <img
                                  class="inline-block size-[38px] rounded-full"
                                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                  alt="Image Description"
                                />
                                <div class="grow">
                                  <span
                                    class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                    >Habiba Mesol Djatto</span
                                  >
                                  <span class="block text-sm text-gray-500">brian@site.com</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="h-px w-72 whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
                                >Accountant</span
                              >
                              <span class="block text-sm text-gray-500">Finance</span>
                            </div>
                          </td>
                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span
                                class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
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
                            </div>
                          </td>
                          <td class="size-px whitespace-nowrap">
                            <div class="px-6 py-3">
                              <span class="text-sm text-gray-500">11 Dec, 18:51</span>
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
                      </tbody>
                    </table>
                    <!-- End Table -->

                    <!-- Footer -->
                    <div
                      class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700"
                    >
                      <div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          <span class="font-semibold text-gray-800 dark:text-gray-200">6</span>
                          résultats
                        </p>
                      </div>

                      <div>
                        <div class="inline-flex gap-x-2">
                          <button
                            type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            <svg
                              class="flex-shrink-0 size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="m15 18-6-6 6-6" />
                            </svg>
                            Prev
                          </button>

                          <button
                            type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Next
                            <svg
                              class="flex-shrink-0 size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- End Footer -->
                  </div>
                </div>
              </div>
            </div>
            <!-- End Card -->
          </div>
          <!-- End Table Section -->
        </div>
      </main>
      <!-- ========== END MAIN CONTENT ========== -->
    </div>
  </body>
</template>
