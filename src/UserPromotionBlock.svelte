<script>
    import {users} from "./db";
    import {fly} from "svelte/transition"
    import {createEventDispatcher} from "svelte"

    export let user
    let dispatch = createEventDispatcher()

    function open_channel(){
        dispatch('transition', {
            user: user,
            page: 'user'
        })
    }
</script>

<div class="col s12 m12 l12">
    <div in:fly="{{y:-50}}" class="card grey lighten-5">
        <div class="card-content">
            <div class="row card-row">
                <div class="col s3 m2 l2 right-align">
                    <img on:click={open_channel} src="https://photostorycontent.difres.ru/avatar/{user}.png" class="responsive-img avatar"/>
                </div>
                <div class="col s9 m10 l10 left-align grey-text">
                    <span on:click={open_channel} class="purple-text">@{users[user]['username']}</span><br />
                    <img src="img/countries/{users[user]['country']}.png" class="country-logo" /> <span class="country-name grey-text">{users[user]['country']}</span><br />
                    {users[user]['status']}<br /><br />
                    <span class="orange-text">Предлагаемый пользователь</span>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .avatar {
        border: 4px solid transparent;
        border-radius: 50%;
        background-image: linear-gradient(white, white), radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        cursor: pointer;
    }

    .card-row {
        margin-bottom: 0;
    }

    .country-logo {
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }

    .country-name {
        vertical-align: middle;
    }

    .purple-text{
        cursor: pointer;
        font-weight: bold;
    }
</style>