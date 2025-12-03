<!-- src/components/CountryList.vue -->
<template>
  <div class="countries">
    <h1>Countries (GraphQL)</h1>

    <div v-if="loading">Loading countries...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>

    <ul v-else style="max-height: 300px; overflow: auto">
      <li v-for="country in data.countries" :key="country.code">
        <strong>{{ country.emoji }} {{ country.name }}</strong>
        <span> — {{ country.code }} | Continent: {{ country.continent.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { gql } from '@apollo/client/core'
import { useQuery } from '@vue/apollo-composable'

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`

const { result: data, loading, error } = useQuery(GET_COUNTRIES)
</script>

<style scoped>
.countries {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  padding: 1.5rem;
}

h1 {
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 0.25rem 0;
}
</style>
