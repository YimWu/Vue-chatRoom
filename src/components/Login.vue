<template>
    <div class="login">
        <div class="wripper">
            <div class="title">ChatRoom V1.0</div>
            <div class="inner">
                <Icon @click="left" class="left" type="md-arrow-round-back" />
                <Avatar class="avatar" shape="square" size="large" :src="myAvatar"/>
                <Icon @click="right" class="right" type="md-arrow-round-forward" />
                <Input v-model="name" class="input" size="large" placeholder="Input Your Name" />
                <Button @click="login" class="button" type="success">Login</Button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            name: '',
            avatar: ['Curry','Curry2', 'avatar1', 'avatar2', 'avatar3', 'avatar4', 'avatar5', 'avatar6', 'avatar7', 'avatar8'],
            avatarNum: 0
        }
    },
    computed: {
        myAvatar(){
            return require(`@/assets/images/${this.avatar[this.avatarNum]}.jpg`)
        } 
    },
    methods: {
        login(){
            this.$router.push({
                path: '/chat',
                name: 'Chat',
                params: {
                    name: this.name,
                    avatar: this.avatar[this.avatarNum]
                }
            })
        },
        left(){
            if(!this.avatarNum){
                this.avatarNum = 9
            }else{
                this.avatarNum = this.avatarNum - 1
            }
            console.log(this.avatarNum)
        },
        right(){
            if(this.avatarNum === 9){
                this.avatarNum = 0
            }else{
                this.avatarNum = this.avatarNum + 1
            }
            console.log(this.avatarNum)
        }
    }
}
</script>

<style lang="stylus">
    .wripper
        width 350px
        height 500px
        background #f5f5f5
        border-radius 4px
        box-shadow 0 0 10px #999
        position absolute
        top 50%
        left 50%
        margin -250px 0 0 -175px
        .title
            font-size 20px
            color #666
            text-align left
            padding 18px
        .inner
            padding 50px
            .left
                display inline-block
                font-size 28px
                padding-right 35px
            .avatar
                display inline-block
                width 110px
                height 110px
            .right 
                display inline-block
                font-size 28px
                padding-left 35px
            .input
                margin-top 60px
            .button
                font-size 16px
                height 40px
                width 100%
                margin-top 20px
</style>