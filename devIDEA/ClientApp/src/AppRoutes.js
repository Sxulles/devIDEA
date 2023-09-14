import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { NewIdea } from "./components/NewIdea";
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
    element: <NewIdea />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
