
import HomePage from "../pages/HomePage";
import CallsPage from "../pages/CallsPage";
import ChatPage from "../pages/ChatPage";
import NotificationsPage from "../pages/NotificationsPage";

const routes = [

    // APP ROUTES ----------
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: false
    },
    {
        path: '/chats/:id',
        exact: true,
        component: ChatPage,
        name: 'Chat Page',
        protected: false
    },
    {
        path: '/notifications',
        exact: true,
        component: NotificationsPage,
        name: 'Notifications Page',
        protected: false
    },
    {
        path: '/calls',
        exact: true,
        component: CallsPage,
        name: 'Calls Page',
        protected: false
    },

];

export default routes;
