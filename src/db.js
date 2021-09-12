export let total_main_pics = 5

export let users = {
    1: {
        'name': 'Игорь',
        'username': 'Darkness',
        'description': 'Первый пользователь нового сервиса PhotoStory, он же разработчик',
        'regDate': '06.08.2021',
        'country': 'Россия',
        'email': 'darkness@drkteam.ru',
        'status': 'Кодинг в сочетании с компьютерными играми'
    },
    2: {
        'name': 'Виктор Алексеев',
        'username': 'onlyMountains',
        'description': 'Брать вершины очень просто — надо только все время идти вверх. (Владимир Белиловский)',
        'regDate': '17.08.2021',
        'country': 'Россия',
        'email': '',
        'status': 'Горы всегда привлекали к себе особое внимание.'
    },
    3: {
        'name': 'Андрей Елизаров',
        'username': 'learnColors',
        'description': 'Оттенки, о которых вы и не слышали',
        'regDate': '30.08.2021',
        'country': 'Россия',
        'email': '',
        'status': 'Цвета придают красоту этому миру'
    }
}

export let posts = {
    1: {
        'user': 1,
        'date': '13.08.2021 10:50',
        'comment': 'Horizon Zero Dawn. Первый пост на сайте',
        'content': [1, 2, 3]
    },
    2: {
        'user': 1,
        'date': '14.08.2021 16:22',
        'comment': 'Horizon Zero Dawn. Скриншоты из игры',
        'content': [4, 5]
    },
    3: {
        'user': 2,
        'date': '17.08.2021 21:59',
        'comment': 'Горы... Такие разные и такие впечатляющие...',
        'content': [6, 7, 8]
    },
    4: {
        'user': 1,
        'date': '18.08.2021 3:48',
        'comment': 'Воробьёвы горы и ВДНХ',
        'content': [9, 10, 11, 12, 13, 14]
    },
    5: {
        'user': 1,
        'date': '21.08.2021 12:25',
        'comment': 'Просто лягушка в море зелени ^^',
        'content': [15, 16, 17]
    },
    6: {
        'user': 3,
        'date': '30.08.2021 17:42',
        'comment': 'Аквамариновый цвет',
        'content': [18, 19]
    },
    7: {
        'user': 1,
        'date': '02.09.2021 15:10',
        'comment': 'Forza Horizon 5',
        'content': [20, 21, 22, 23, 24, 25]
    }
}

export let comments = {
    1: {
        'post': 1,
        'user': 1,
        'date': '16.08.2021',
        'comment': 'Первый комментарий для проверки работы системы.'
    }
}