/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { usePreferredColorScheme } from '@vueuse/core'
import { createVuetify } from 'vuetify'
import { indigo, blue } from 'vuetify/lib/util/colors'

const preferredColor = usePreferredColorScheme()

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const vuetify = createVuetify({
  theme: {
    defaultTheme: preferredColor.value,
    themes: {
      light: {
        colors: {
          primary: indigo.base,
          secondary: blue.base,
        },
      },
      dark: {
        colors: {
          primary: indigo.base,
          secondary: blue.base,
        },
      },
    },
  },
})

watch(
  preferredColor,
  (newVal) => {
    vuetify.theme.global.name.value = newVal
  },
  { immediate: true },
)

export default vuetify
