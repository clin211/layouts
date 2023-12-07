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

    <div class="linear-gradient">
        <h1>linear gradient 的使用技巧</h1>
        <h2>渐变从一种颜色过渡到另一种颜色</h2>
        <h3>正方形</h3>
        <div class="linear-gradient-color"></div>

        <h3>圆形</h3>
        <div class="linear-gradient-color2"></div>

        <h3>三角形</h3>
        <div class="linear-gradient-color3"></div>

        <h2>多层叠加</h2>
        <div class="notching"></div>

        <h2>repeating-linear-gradient</h2>
        <p>处理不断重复的渐变时使用，它与background-repeat的区别？</p>
        <div class="repeating-linear-gradient"></div>

        <h1>radial-gradient 径向渐变</h1>
        <div class="radial-gradient-box1"></div>

        <h3>利用多层渐变组合图形</h3>
        <div class="radial-gradient-box2"></div>

        <div class="coupon">50</div>
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

::-webkit-scrollbar {
    display: none;
}

[class^='linear-gradient-'] {
    width: 300px;
    height: 300px;
    border: 2px solid #000;
}
.linear-gradient-color {
    background: linear-gradient(#fff 0%, #fff 50%, #000 50%, #000 100%);
}
.linear-gradient-color2 {
    background: linear-gradient(#fff 0%, #fff 50%, #000 50%, #000 100%);
    border-radius: 50%;
}
.linear-gradient-color3 {
    background: linear-gradient(45deg, red 0%, #fff 50%, #000 50%, #000 100%);
}

.notching {
    width: 200px;
    height: 120px;
    background:
        // 左上角
        linear-gradient(135deg, transparent 15px, deepskyblue 0),
        // 右上角
        linear-gradient(-135deg, transparent 15px, deepskyblue 0),
        // 左下角
        linear-gradient(45deg, transparent 15px, deepskyblue 0),
        // 右下角
        linear-gradient(-45deg, transparent 15px, deepskyblue 0);
    background-size: 50% 50%; // 如果四组都一样的haul，可以直接写成50% 50%
    background-position:
        top left,
        top right,
        bottom left,
        bottom right;
    background-repeat: no-repeat;
}

.repeating-linear-gradient {
    border: 2px solid deepskyblue;
    width: 300px;
    height: 100px;
    // 每11px重复一次red，每（18-11）=7px重复一次#fff
    background: repeating-linear-gradient(
        45deg,
        deepskyblue,
        deepskyblue 11px,
        #fff 11px,
        #fff 18px
    );
}

.radial-gradient-box1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(#9c27b0, 0%, #9c27b0 47%, #ffeb3d 47.4%, #ffeb3d 100%);
}

.radial-gradient-box2 {
    position: relative;
    width: 100vw;
    height: 300px;
    background: linear-gradient(180deg, #607d8b, #673ab7), rgba(0, 0, 0, 0.5);
    background-repeat: no-repeat;
    animation: moveC 10s linear infinite;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 40px;
        right: 0;
        background-repeat: repeat-x;
        height: 10px;
        background-size: 20px 20px;
        background-image: radial-gradient(
            circle at 10px -5px,
            transparent 12px,
            #fff 13px,
            #fff 20px
        );
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 35px;
        right: 0;
        background-repeat: repeat-x;
        height: 15px;
        background-size: 40px 20px;
        background-image: radial-gradient(circle at 10px 15px, white 12px, transparent 13px);
    }
}

.coupon {
    position: relative;
    width: 400px;
    height: 160px;
    margin: 20px auto;
    background-image: radial-gradient(
            circle at 2px 8px,
            transparent 6px,
            #f49714 6.3px,
            #f49714 0px
        ),
        radial-gradient(circle at 199px 8px, transparent 6px, #f49714 6.3px, #f49714 0px);
    background-size: 200px 18px;
    background-position:
        0 0,
        200px 0;
    background-repeat-x: no-repeat;

    font-size: 100px;
    color: #fff;
    font-weight: bold;
    line-height: 160px;
    padding-left: 60px;
    box-sizing: border-box;
    cursor: pointer;

    &::before {
        position: absolute;
        content: '';
        left: 240px;
        top: 0;
        bottom: 0;
        width: 0;
        border-left: 1px dashed #fff;
    }

    &::after {
        position: absolute;
        content: '立即领取';
        font-size: 30px;
        width: 70px;
        top: 50%;
        right: 2%;
        transform: translate(-50%, -50%);
        line-height: 40px;
        letter-spacing: 5px;
    }
}
</style>
