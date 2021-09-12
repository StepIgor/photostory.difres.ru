<script>
    import {createEventDispatcher} from "svelte"
    import {fly} from "svelte/transition"

    let dispatch = createEventDispatcher()

    function transition(p, u) {
        dispatch('transition', {
            page: p,
            user: u
        })
    }
</script>

<div class="row valign-wrapper">
    <div class="col s2 m4 l4 right-align">
        <img on:click={()=>transition('feed')} src="logo.png" class="hide-on-small-only large-logo"/>
        <img on:click={()=>transition('feed')} src="sm-logo.png" class="hide-on-med-and-up small-logo"/>
    </div>
    <div class="col s10 m8 l8 grey-text valign-wrapper links left-align">
        <a in:fly="{{x:50}}" on:click={()=>transition('feed')} class="grey-text text-darken-1">Лента</a>
        <a in:fly="{{x:50}}" on:click={()=>transition('subs')} class="grey-text text-darken-1">Подписки</a>
        <a in:fly="{{x:50}}" on:click={()=>transition('liked')} class="grey-text text-darken-1">Понравилось</a>
        <a in:fly="{{x:50}}" on:click={()=>transition('settings')} class="grey-text text-darken-1">Настройки</a>
    </div>
</div>


<style>
    .large-logo {
        width: 128px;
    }

    .small-logo {
        width: 32px;
    }

    .row {
        margin-top: 25px;
    }

    .links > a {
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        margin-left: 25px;
    }

    .links {
        overflow-x: auto;
    }

    img {
        cursor: pointer;
    }
</style>