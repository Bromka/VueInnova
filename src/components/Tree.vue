<template>
    <div class="comment">
        <div class="comment__body">
            <Commentary :comment="branch.comment"/>
        </div>
        <div class="wrap2" v-show="branch.children && branch.children.length > 0">
            <div class="comment-toggle-children">
                <div class="icon" v-show="!collapse" @click="toggle">
                     <i class="far fa-minus-square"></i>
                </div>
                <div class="icon" v-show="collapse" @click="toggle" >
                    <i class="fa-plus-square far"></i>
                </div>
                <div class="line"></div>
            </div>
            <div class="comment__children">
                <div v-if="branch.children && !collapse && branch.children.length > 0">
                    <TreeComp v-for="item in branch.children" :branch="item" :key="item.comment.Data.id" :first="false"/>
                </div>
                <div v-else>
                    show comments
                </div>
            </div>

        </div>


    </div>
</template>
<script>
    import Commentary from './Commentary'

    export default {
        name: 'TreeComp',
        props: {
            branch: Object,
            first: Boolean
        },
        data: () => {
            return {
                collapse: false
            }
        },
        components: {
            Commentary
        },
        mounted() {
        },
        methods:{
            toggle: function () {
                this.collapse = !this.collapse
            }
        }
    }

</script>
<style scoped>
    .comment {
    }
    .comment__body{

    }
    .comment-toggle-children{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .comment__children{
        flex-grow: 19;
    }

    .wrap2{
        display: flex;

    }


    .line {
        height: 100%;
        width: 1px;
        margin: 5px;
        margin-bottom: 15px;
        border: none;
        border-left: 1px dashed #e9e9e9;
    }

</style>