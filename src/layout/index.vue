<template>
    <div>
       layout
       <div @click="goto">
           121
       </div>
       <div>
           <router-view/>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goto(){
            this.$router.push({name:'login'})
        }
    }
}
</script>