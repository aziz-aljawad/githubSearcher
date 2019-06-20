import {Repository} from '../models/repository.interface';
import { USER_LIST } from "../mocks/user.mocks";


const repositoryList:Repository[]=[
    {
        name:'Ionic 3 Camera',
        description: 'This repositary shows the usage of the Camera functionalty within Ionic 3. ',
        owner: USER_LIST[0]
    },
    {
        name:'Ionic 3 SMS',
        description: 'This repositary shows the usage of the SMS functionalty within Ionic 3. ',
        owner: USER_LIST[0]
    },
    {
        name:'Ionic 3 Geolocation',
        description: 'This repositary shows the usage of the Geolocation functionalty within Ionic 3. ',
        owner: USER_LIST[1]
    },
    {
        name:'Ionic 3 Vibration',
        description: 'This repositary shows the usage of the Viberation functionalty within Ionic 3. ',
        owner: USER_LIST[1]
    }
];

export const REPOSITORY_LIST=repositoryList;