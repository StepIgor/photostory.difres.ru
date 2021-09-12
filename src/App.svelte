<script>
    import Content from "./Content.svelte";
    import {skip_indexPage, lastAppUpdate} from "./stores";

    let page = 'main'
    let user = 0

    let currentDate = new Date()

    if ($lastAppUpdate.length == 0 || $lastAppUpdate[0] != currentDate.getDate() || $lastAppUpdate[1] != currentDate.getMonth() || $lastAppUpdate[2] != currentDate.getFullYear()){
        let lastUpdate = []
        lastUpdate.push(currentDate.getDate())
        lastUpdate.push(currentDate.getMonth())
        lastUpdate.push(currentDate.getFullYear())
        lastAppUpdate.set(lastUpdate)
        window.location.reload(true)
    }

    if ($skip_indexPage == "true"){
        page = 'feed'
    }

    function transition(p){
        page = p.detail.page
        user = p.detail.user != null ? parseInt(p.detail.user) : 0
    }
</script>

<Content page={page} user={user} on:transition={transition}/>