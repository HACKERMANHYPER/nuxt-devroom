<template>
    <div class="calculator">
        <div class="display">{{ current }}</div>
        <div @click="clear('all')">CE</div>
        <div @click="clear('current')">C</div>
        <div @click="clear('one')"><BackIcon /></div>
        <div @click="setOperator('/')">/</div>
        <div @click="displayUpdate(7)">7</div>
        <div @click="displayUpdate(8)">8</div>
        <div @click="displayUpdate(9)">9</div>
        <div @click="setOperator('*')">*</div>
        <div @click="displayUpdate(4)">4</div>
        <div @click="displayUpdate(5)">5</div>
        <div @click="displayUpdate(6)">6</div>
        <div @click="setOperator('-')">-</div>
        <div @click="displayUpdate(1)">1</div>
        <div @click="displayUpdate(2)">2</div>
        <div @click="displayUpdate(3)">3</div>
        <div @click="setOperator('+')">+</div>
        <div @click="displayUpdate(0)">0</div>
        <div @click="displayPoint()">.</div>
        <!-- TODO add comma -->
        <div class="equal" @click="calc()">=</div>
    </div>
</template>

<script setup>
import { parse } from 'vue/compiler-sfc';
import BackIcon from './single/BackIcon.vue';
import { ref } from 'vue';

let current = ref(0);
let previous = 0;
let operator;
function clear(param) {
    if (param == 'current') {
        current.value = 0;
    }
    if (param == 'one') {
        current.value = Math.floor(current.value / 10);
    }
    if (param == 'all') {
        current.value = 0;
        previous = 0;
    }
}
function displayUpdate(number) {
    number = number.toString();
    current.value == 0 ? (current.value = number) : (current.value += number);
    current.value = parseFloat(current.value);
}
function displayPoint() {
    current.value = current.value.toString();
    current.value += '.'; //TODO fick diesen punkt
    current.value = parseFloat(current.value);
}
function setOperator(inputOperator) {
    if (inputOperator == '*') {
        operator = '*';

        previous = current.value;
        current.value = 0;
    }
    if (inputOperator == '/') {
        operator = '/';

        previous = current.value;
        current.value = 0;
    }
    if (inputOperator == '-') {
        operator = '-';

        previous = current.value;
        current.value = 0;
    }
    if (inputOperator == '+') {
        operator = '+';

        previous = current.value;
        current.value = 0;
    }
}
function calc() {
    if (operator == '*') {
        current.value = previous * current.value;
    }
    if (operator == '/') {
        current.value = previous / current.value;
    }
    if (operator == '-') {
        current.value = previous - current.value;
    }
    if (operator == '+') {
        current.value = previous + current.value;
    }
}
</script>

<style>
:root {
    --grey: #212832;
    --orange: #fb7845;
}

.calculator {
    display: grid;
    grid-template-columns: repeat(4, 5rem);
    justify-content: center;
    row-gap: 10px;
    column-gap: 10px;
    text-align: center;
    background-color: black;
    padding: 2rem;
}
.calculator .display {
    grid-column: 1 / 5;
    grid-row: 1;
    text-align: right;
    font-size: 2rem;
    font-weight: 500;
    overflow: hidden;
}
.calculator .equal {
    grid-column: 3 / 5;
    grid-row: 6;
    background-color: var(--orange);
    font-weight: 800;
}
.calculator div {
    background-color: var(--grey);
    border-radius: 2px;
    padding: 15px;
    font-weight: 500;
}
.calculator div:hover:not(:nth-child(1)) {
    filter: brightness(120%);
    cursor: pointer;
    user-select: none;
}
.calculator div:active:not(:nth-child(1)) {
    filter: brightness(80%);
}
</style>
