export let total_main_pics = 5

export let users = {
    1: {
        'name': 'Игорь',
        'username': 'Darkness',
        'description': 'Первый проверочный аккаунт сервиса',
        'regDate': '06.08.2021',
        'country': 'Россия',
        'email': 'darkness@drkteam.ru',
        'status': 'Публикация материалов на различные темы'
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
        'user': 2,
        'date': '17.08.2021 21:59',
        'comment': 'Горы... Такие разные и такие впечатляющие...',
        'content': [6, 7, 8]
    },
    2: {
        'user': 1,
        'date': '18.08.2021 3:48',
        'comment': 'Воробьёвы горы и ВДНХ',
        'content': [9, 10, 11, 12, 13, 14]
    },
    3: {
        'user': 1,
        'date': '21.08.2021 12:25',
        'comment': 'Просто лягушка в море зелени ^^',
        'content': [15, 16, 17]
    },
    4: {
        'user': 3,
        'date': '30.08.2021 17:42',
        'comment': 'Аквамариновый цвет',
        'content': [18, 19]
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