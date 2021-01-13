<template>
    <div>
       
       <div @click="goto">
          layout
          
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