import 'preline/preline'
import { type IStaticMethods } from 'preline/preline'

declare global {
  interface Window {
    ESStaticMethods: IStaticMethods
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    window.ESStaticMethods.autoInit()
  })
})
