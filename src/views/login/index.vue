<template>
<div>
    <div @click="login">
        login11
    </div>
    <div>
        <img src="@a/login/huiyuan.png" alt="">
    </div>
</div>
    
</template>
<script>
import {login} from '@/api/user'
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
            this.$store.dispatch('user/login',data).then(res=>{
                console.log(123);
            }).catch(res=>{

            })
        }
    }
}
</script>