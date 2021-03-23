export const routePath = {
    home: '/',
    login: '/auth/login',
}

export const routes = [
    {
        path: routePath.home,
        exact: true,
        component: 'home',
        protected: true
    },
    {
        path: routePath.login,
        exact: true,
        component: 'login',
        protected: false
    }
]