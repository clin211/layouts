<template>
    <div class="g-container">
        <h2>skill</h2>
        <ul>
            <li>javascript</li>
            <li>Node.js</li>
            <li>css</li>
            <li>html</li>
            <li>vue</li>
            <li>react</li>
            <li>react-native</li>
            <li>flutter</li>
            <li>Go</li>
            <li>Rust</li>
        </ul>
    </div>
</template>
<script lang="ts"></script>
<style scoped lang="scss">
.g-container {
    position: relative;
    width: 300px;
    padding: 5px;

    &::before {
        content: '';
        position: absolute;
        right: -5px;
        bottom: 0;
        top: 0;
        height: 100%;
        width: 100px;
        background: linear-gradient(90deg, transparent, #fff);
        pointer-events: none;
    }

    ul {
        width: 300px;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        column-gap: 12px;
        border: 1px solid #999;

        li {
            border-radius: 5px;
            border: 1px solid #666;
            padding: 0 4px;
            cursor: pointer;

            &:hover {
                background: #666;
                color: #fff;
            }
        }
    }
}

// ::-webkit-scrollbar {
//     display: none;
// }
</style>
