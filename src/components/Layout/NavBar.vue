<template>
    <nav class="navbar is-success" aria-label="main navigation" role="navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    Noteballs
                </div>

                <a @click.prevent="showMobileNav =!showMobileNav" class="navbar-burger"
                    :class="{ 'is-active': showMobileNav}" aria-expanded="false" aria-label="menu"
                    data-target="navbarBasicExample" role="button" ref="navbarBurgerRef">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav}" ref="navbarMenuRef">
                <!-- <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div> -->

                <div class="navbar-end">
                    <RouterLink @click="showMobileNav=false" to="/" class="navbar-item" active-class="is-active">
                        Notes
                    </RouterLink>
                    <RouterLink @click="showMobileNav=false" to="/stats" class="navbar-item" active-class="is-active">
                        Stats
                    </RouterLink>
                </div>
            </div>
        </div>

    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const navbarMenuRef = ref(null)
const showMobileNav = ref(false)
const navbarBurgerRef = ref(null)
onClickOutside(navbarMenuRef, (event) => { showMobileNav.value = false }, { 
    ignore: [navbarBurgerRef]
})
</script>

<style>
@media (max-width:1023px){
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>