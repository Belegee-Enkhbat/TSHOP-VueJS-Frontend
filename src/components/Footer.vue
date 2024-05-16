<template>
  <footer>
    <div>
      <div class="footer-bot content">
        <p class="FOL">
          ©2024 TSHOP. All rights reserved.
        </p>
        <div class=".footer-top__text">

          БИДНИЙГ ДАГААРАЙ.
          <a href="https://www.facebook.com/TSHOP" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/TSHOP" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>

        <menu class="footer-bot__menu">

          <li class="footer-bot__menu-item">
            <template v-if="$store.state.user == 'super'">
              <router-link to="/ManageProduct" class="button is-success">
                <p class="footer-bot__menu-link">Бүтээгдэхүүн нэмэх</p>
              </router-link>
            </template>
          </li>
          <li class="footer-bot__menu-item">
            <template v-if="$store.state.user == 'super'">
              <router-link to="/ManageCatalog" class="button is-success">
                <p class="footer-bot__menu-link">Ангилал нэмэх</p>
              </router-link>
            </template>
          </li>

        </menu>

      </div>
    </div>
  </footer>
</template>
<script setup></script>

<style scoped lang="scss"></style>
