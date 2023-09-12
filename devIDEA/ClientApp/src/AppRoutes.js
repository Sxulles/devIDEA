import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { CreateIdea } from "./components/CreateIdea";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/idea',
    requireAuth: false, // while login system not working
    element: <CreateIdea />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
