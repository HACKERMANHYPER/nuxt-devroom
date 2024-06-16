<template>
        <div class="bg-overlay bg-slate-700"></div>
            <div class="flex flex-col w-full items-center p-20">
                <img class="clamblogo" src="public\blitz.svg"></img>
                <p class="font-display clambfont">
                    devroom
                </p>
                <p class="text-slate-700 text-center">
                    Eine Sammlung meines Fortschritts
                </p>
            </div>
</template>

<style>
    .clamblogo{
        width:calc(clamp(6.25rem, 11.538vw + 1.779rem, 15.625rem));
    }
    .clambfont{
        font-size: clamp(1rem, -0.4844rem + 3.9583vw, 2.1875rem);
    }

    .bg-overlay {
        position:absolute;
        margin-top: -10rem;
        opacity: 0.1;
        background: repeating-linear-gradient( 45deg, #475569, #475569 5px, #334155 5px, #0f172a 25px );
        height:150vh;
        width:100vw;
        z-index: -10;
    }
    body {
        overflow-y:hidden;
    }
</style>