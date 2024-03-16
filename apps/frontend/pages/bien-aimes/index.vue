<template>
  <body class="bg-white dark:bg-slate-800 h-full">
    <div class="max-w-[72rem] flex flex-col mx-auto size-full">
      <main id="content" role="main">
        <div class="py-10 px-4 sm:px-6 lg:px-8">
          <SearchComponent label="Bien Aimés" icon="bien-aime" />

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
                        <TablePersonRow
                          v-for="person in bienAimes"
                          :key="id++"
                          :personName="person.name"
                          :personEmail="person.email"
                          :personJob="person.job"
                          :personDepartment="person.department"
                          :personStatus="person.status"
                          :personLastMeeting="person.lastMeeting"
                        ></TablePersonRow>
                      </tbody>
                    </table>
                    <!-- End Table -->

                    <!-- Footer -->
                    <div
                      class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700"
                    >
                      <div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          <span class="font-semibold text-gray-800 dark:text-gray-200">{{
                            bienAimes.length
                          }}</span>
                          résultat{{ bienAimes.length > 1 ? 's' : '' }}
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
                            Prec
                          </button>

                          <button
                            type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Suiv
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

<script lang="ts" setup>
let id = ref(0)
let bienAimes = reactive([
  {
    name: 'Loïc Essonghé',
    email: 'loic.essonghe@site.com',
    job: 'STAR',
    department: 'MJI',
    status: 'en-cours',
    lastMeeting: '23 Dec 23, 12:23',
  },
  {
    name: 'Sarah Couti',
    email: 'sarah.couti@site.com',
    job: 'Membre',
    department: '',
    status: 'en-cours',
    lastMeeting: '23 Dec 23, 12:23',
  },
  {
    name: 'Noellha Diambou',
    email: 'noellha.diambou@site.com',
    job: 'STAR',
    department: 'Accueil',
    status: 'restaure',
    lastMeeting: '23 Dec 23, 12:23',
  },
  {
    name: 'Marie Rufine Ebengue',
    email: 'rufine.ebengue@site.com',
    job: 'STAR',
    department: 'Comptabilité',
    status: 'restaure',
    lastMeeting: '23 Dec 23, 12:23',
  },
  {
    name: 'Romarique Aïhou',
    email: 'rom.aihou@site.com',
    job: 'STAR',
    department: 'Evangélisation',
    status: 'sorti',
    lastMeeting: '23 Dec 23, 12:23',
  },
  {
    name: 'Habiba Mesol Djatto',
    email: 'loic.essonghe@site.com',
    job: 'STAR',
    department: 'Vidéo & Photo',
    status: 'restaure',
    lastMeeting: '23 Dec 23, 12:23',
  },
  {
    name: 'Solange Mvoula',
    email: 'so.mvoula@site.com',
    job: 'STAR',
    department: 'Protocole',
    status: 'en-cours',
    lastMeeting: '23 Dec 23, 12:23',
  },
  {
    name: 'Aurélie Pemba',
    email: 'aurelie.pemba@site.com',
    job: 'STAR',
    department: 'Comptoir Accueil',
    status: 'sorti',
    lastMeeting: '23 Dec 23, 12:23',
  },
  {
    name: 'Zoé Diboue',
    email: 'z.diboue@site.com',
    job: 'Membre',
    department: '',
    status: 'restaure',
    lastMeeting: '23 Dec 23, 12:23',
  },
  {
    name: 'Mireille Choukourou',
    email: 'mimi.chou@site.com',
    job: 'STAR',
    department: 'Familles',
    status: 'sorti',
    lastMeeting: '23 Dec 23, 12:23',
  },
  {
    name: 'Ruth Tchoumou',
    email: 'ruth.tchoum@site.com',
    job: 'STAR',
    department: 'Evénementiel',
    status: 'restaure',
    lastMeeting: '23 Dec 23, 12:23',
  },
])
</script>
