let users=[
    {id: 1, name: 'Nataly' , avatar:'https://vudava.ru/wp-content/uploads/2019/04/4.jpg'},
    {id: 2, name: 'Katya', avatar:'https://i.pinimg.com/736x/d0/c4/f5/d0c4f58ca8c2def2c9667a3ebe28600d.jpg'},
    {id: 3, name: 'Yulia', avatar:'https://art-holst.com.ua/img/gallery/14/thumbs/thumb_ls_42591.jpg'},
    {id: 4, name: 'Sveta', avatar:'https://avatars.mds.yandex.net/get-pdb/225396/5505d09d-1a7f-4292-bc70-eca7f1d60819/s1200'},
    {id: 5, name: 'Viktor', avatar:'https://avatarko.ru/img/kartinka/23/zhivotnye_ptica_kolibri_22651.jpg'},
    {id: 6, name: 'Anna', avatar:'https://99px.ru/sstorage/41/2017/09/image_410309172231078922344.jpg'}
];
let state={

    profilePage: {
        posts: [
            {id: 1, message: 'Как ты ?', likesCount: 15},
            {id: 2, message: 'Хорошо выглядишь', likesCount: 20},
            {id: 3, message: 'yiiiii', likesCount: 20},
            {id: 4, message: 'pefwpepfgsg', likesCount: 20}]
    },
    dialogsPage: {
        dialogs: users.map(user => (
            {id: user.id, name: user.name ,avatar: user.avatar}
        ))
        ,
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Hiiiiii'},
            {id: 4, message: ':))))'}]
    },
    navbar: {
        friends: users.map(user => (
            {id: user.id, name: user.name ,avatar: user.avatar}
        ))
    }

};

export default state;