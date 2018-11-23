import History from './History';

const Index = () => <h2> Home </h2>;
const newRoutes = [{

        path: '/',
        component: Index
    },
    {
        path: '/history',
        component: History
    }
];
export default newRoutes; 