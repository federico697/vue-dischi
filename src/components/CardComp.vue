<template>
    <div class="col">
        <div class="card">
            <img :src="InfoProps.poster" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="text-center">
                    <h5 class="card-title text-uppercase">{{InfoProps.title}}</h5>
                    <span>{{InfoProps.author}}</span>
                    <span> {{InfoProps.year}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComp',
        props: {
            InfoProps: Object
        }
    }
</script>

<style lang="scss" scoped>
    // div{
    //     border: 2px solid pink;
    // }
</style>