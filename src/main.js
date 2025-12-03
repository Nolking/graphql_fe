import './assets/main.css'

import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { apolloClient } from "./apolloClient";
import { DefaultApolloClient } from "@vue/apollo-composable";

const app = createApp({
  setup() {
    // provide Apollo client to the whole app
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});


app.use(createPinia())

app.mount('#app')
