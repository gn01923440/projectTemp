
<template>
    <span class="tips">{{ props.msg }}</span>
</template>

<script setup>
    const props = defineProps(['msg']);

</script>


<style >
    /* 按鈕提示字 */
    button.btn{
        position: relative;
        font-size: 1rem;
    }
    span.tips{
        /* white-space: nowrap; */
        /* word-wrap:b ; */
        /* width: 200px; */
        display: inline-block;
        background-color: black;
        color: white;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: .8rem;
        display: none;
        position: absolute;
        top: calc(120% + 1px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 10000;
    }
    span.tips::after{
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -8px;
        
        border-top: 0px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid black;
        border-left: 8px solid transparent;
    }
    button.btn:hover span.tips{
        display: block;
    }
</style>
