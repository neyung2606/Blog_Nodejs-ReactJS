export const routePath = {
    user: '/admin/user',
    login: '/auth/login',
}

export const routes = [
    {
        path: routePath.user,
        exact: true,
        component: 'user',
        protected: true
    },
    {
        path: routePath.login,
        exact: true,
        component: 'login',
        protected: false
    }
]