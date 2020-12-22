<template>
    <div @click="login">
        login
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        login(){
            console.log(this.$store.state);
            let data = {
                user_tel:13016457947,
                user_passwd:123456
            }
            
            //异步操作的vuex
            this.$store.dispatch('login',data).then(res=>{
                console.log(123);
            }).catch(res=>{

            })
        }
    }
}
</script>