<template>
    <div class="comment">
        <div class="comment__body">
            <Commentary :comment="branch.comment" :tree-model="treeModel" :branch="branch"/>
        </div>
        <div class="wrap2" v-show="branch.children && branch.children.length > 0">
            <div class="comment-toggle-children">
                <div class="icon" v-show="!collapse" @click="toggle">
                     <i class="far fa-minus-square"></i>
                </div>
                <div class="icon green" v-show="collapse" @click="toggle"  >
                    <i class="fa-plus-square far"></i>
                </div>
                <div class="line"></div>
            </div>
            <div class="comment__children">
                <div v-if="branch.children && !collapse && branch.children.length > 0">
                    <TreeComp v-for="item in branch.children" :branch="item" :key="item.comment.Data.id" :tree-model="treeModel" :first="false"/>
                </div>
                <div v-else class="show_comments_plank">
                    show comments
                </div>
            </div>

        </div>


    </div>
</template>
<script>
    import Commentary from './Commentary'
    import {collapsed} from '../models/Utils';

    export default {
        name: 'TreeComp',
        props: {
            branch: Object,
            first: Boolean,
            treeModel: Object
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
          this.collapse = collapsed(this.branch.level)

        },
        methods:{
            toggle: function () {
                this.collapse = !this.collapse
            }
        },

    }

</script>
<style scoped>
    .comment {
    }
    .comment__body{

    }
    .comment-toggle-children{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        min-width: 3em;
    }

    .wrap2{
        display: flex;

    }
    .comment__children{
        width: 100%;
    }

    .line {
        height: 100%;
        width: 1px;
        margin: 5px;
        margin-bottom: 15px;
        border: none;
        border-left: 1px dashed #e9e9e9;
    }
    .icon{
        color: #757575;
    }
    .show_comments_plank{
        margin-left: 2em;
        user-select: none;
    }
</style>