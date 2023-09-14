import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { CreateIdea } from "./components/CreateIdea";
import { Home } from "./components/Home";
import {Hero} from "./components/Hero";

const AppRoutes = [
  {
    index: true,
    element: <Hero />
  },
  {
    path: '/home',
    requireAuth: false, // while login system not working
    element: <Hero />
  },
  {
    path: '/idea',
    requireAuth: false, // while login system not working
    element: <CreateIdea />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
