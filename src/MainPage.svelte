<script>
    import {last_main_picture} from "./stores"
    import {total_main_pics} from "./db";
    import {onMount} from "svelte"
    import {fade, blur, fly} from "svelte/transition"
    import {createEventDispatcher} from "svelte"

    let visible = false
    let dispatch = createEventDispatcher()

    onMount(() => {
        visible = true
        last_main_picture.set($last_main_picture < total_main_pics ? $last_main_picture + 1 : 1)
    })

    function transition(page){
        dispatch('transition', {
            page: page
        })
    }
</script>

{#if visible}
    <div class="row">
        <div class="col s12 m7 l8 center-align">
            <h3 class="light">Делиться фотографиями с миром</h3>
            <img in:fade src="https://photostorycontent.difres.ru/main/{$last_main_picture}.png" class="responsive-img"/>
        </div>
        <div in:fly="{{y:-50}}" class="col s12 m5 l4 right-align">
            <div class="card horizontal logo-card">
                <div class="card-image">
                    <img src="favicon.png" class="logo"/>
                </div>
                <div class="card-stacked">
                    <div class="card-content left-align logo-text">
                        Добро пожаловать!
                    </div>
                </div>
            </div>
            <br/>
            <a on:click={()=>transition('feed')} class="btn purple white-text">Открыть ленту</a>
        </div>
    </div>
    <div class="row about-container">
        <div class="col s12 m12 l12 center-align grey-text">
            2021 DIFRES.RU ©
        </div>
    </div>
{/if}

<style>
    h3 {
        margin-top: 75px;
        margin-bottom: 45px;
    }
    .logo {
        max-height: 80px;
    }
    .logo-card {
        margin-top: 75px;
        max-height: 80px;
        margin-bottom: 0px;
    }
    .logo-text {
        font-weight: bold;
        font-size: 12px;
    }
    .btn {
        width: 100%;
    }
    .about-container {
        margin-top: 25px;
    }
</style>