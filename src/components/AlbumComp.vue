<template>
    <div id="albumList" class="row justify-content-between row-cols-5">
        <CardComp v-for="(elem, index) in albums" 
         :key="index" :InfoProps="elem" />
    </div>
</template>

<script>
import CardComp from './CardComp.vue';
import axios from 'axios'
    export default {
        name: 'AlbumComp',
        components: {
            CardComp
        },
        data(){
            return{
                albums: []
            }
        },
        mounted(){
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
             .then((response)=>{
                // console.log(response.data.response)
                this.albums = response.data.response
             })
        }

    }
</script>

<style lang="scss" scoped>
    #albumList{
        border: 2px solid lightblue;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
</style>