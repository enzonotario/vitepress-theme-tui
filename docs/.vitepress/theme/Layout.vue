<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <div class="w-full flex flex-row justify-end px-1 md:px-3">
        <ThemeSwitcher />
      </div>
    </template>
  </Layout>
</template>
