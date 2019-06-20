import { User } from '../models/user.interface';

const userList: User[] = [
    {
        name:'Aziz-aljawad',
        company:'ALYEX',
        location:'Manama,Bahrain',
        bio:'An excellent developer',
        avatar_url:'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
        email:'aziz@aziz.com'
    },
    {
        name:'Ali-abdulaal',
        company:'ALYEX',
        location:'Manama,Bahrain',
        bio:'An excellent developer too',
        avatar_url:'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
        email:'ali@ali.com'
    }
];

export const USER_LIST = userList;