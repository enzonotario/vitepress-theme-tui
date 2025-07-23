<script setup>
import DefaultTheme from 'vitepress/theme'
import HomeTitle from './components/HomeTitle.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <div class="w-full flex flex-row justify-end px-1 md:px-3">
        <ThemeSwitcher />
      </div>
    </template>

    <template #home-hero-before>
      <div class="pt-8">
        <HomeTitle />
      </div>
    </template>
  </Layout>
</template>

<style>
.VPHero.VPHomeHero {
  padding-top: 64px;
}
.VPHero.VPHomeHero .main {
  text-align: center;
  display: block;
}
.VPHero .heading, .VPHero span.text, .VPHero p.tagline {
  width: 100% !important;
  max-width: 100% !important;
  display: block !important;
  text-align: center !important;
}
.VPHero .actions {
  justify-content: center;
}
</style>
