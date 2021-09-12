<script>
    import {fly} from "svelte/transition"
</script>

<div in:fly="{{y:-50}}" class="row">
    <div class="col s12 m12 l12 center-align">
        <i class="material-icons large grey-text">assignment_turned_in</i>
    </div>
    <div class="col s12 m12 l12 grey-text center-align">
        <b>На этом всё</b>
    </div>
    <div class="col s12 m12 l12 grey-text center-align">
        Вы просмотрели всю ленту
    </div>
</div>