<template>
    <main>
        <!-- lista intera di album -->
        <div class="container text-center">
            <AlbumComp/>
        </div>

    </main>
</template>

<script>
import AlbumComp from '../components/AlbumComp.vue'

    export default {
        name: 'MainComp',
        components: {
            AlbumComp
        } 
    }
</script>

<style lang="scss" scoped>
    main{
        border: 2px solid blue;
        height: calc(100% - 100px);
        background-color: #1E2D3B;
        color: rgb(12, 11, 11);
    }
</style>