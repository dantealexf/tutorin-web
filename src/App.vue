<template>
    <div id="app">
        <transition name="router-anim" enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
            <router-view/>
        </transition>
    </div>
</template>
