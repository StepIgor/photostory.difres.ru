import {writable} from "svelte/store";

export let last_main_picture = writable(parseInt(localStorage.getItem('last_main_picture') == null ? '1' : localStorage.getItem('last_main_picture')))
last_main_picture.subscribe((val) => localStorage.setItem('last_main_picture', parseInt(val)))

export let subs = writable(JSON.parse(localStorage.getItem('subs') == null ? '[]' : localStorage.getItem('subs')))
subs.subscribe((val) => localStorage.setItem('subs', JSON.stringify(val)))

export let liked = writable(JSON.parse(localStorage.getItem('liked') == null ? '[]' : localStorage.getItem('liked')))
liked.subscribe((val) => localStorage.setItem('liked', JSON.stringify(val)))

export let promote_channels = writable(localStorage.getItem('promote_channels') == null ? 'true' : localStorage.getItem('promote_channels'))
promote_channels.subscribe((val) => localStorage.setItem('promote_channels', val))

export let promote_posts = writable(localStorage.getItem('promote_posts') == null ? 'true' : localStorage.getItem('promote_posts'))
promote_posts.subscribe((val) => localStorage.setItem('promote_posts', val))

export let feed_mode = writable(localStorage.getItem('feed_mode') == null ? 'standart' : localStorage.getItem('feed_mode'))
feed_mode.subscribe((val) => localStorage.setItem('feed_mode', val))

export let skip_indexPage = writable(localStorage.getItem('skip_indexPage') == null ? 'false' : localStorage.getItem('skip_indexPage'))
skip_indexPage.subscribe((val) => localStorage.setItem('skip_indexPage', val))

export let lastAppUpdate = writable(localStorage.getItem('lastAppUpdate') == null ? '[]' : JSON.parse(localStorage.getItem('lastAppUpdate')))
lastAppUpdate.subscribe((val) => localStorage.setItem('lastAppUpdate', JSON.stringify(val)))