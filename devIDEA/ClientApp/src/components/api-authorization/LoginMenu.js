import React, { useEffect, useState } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './AuthorizeService';
import { ApplicationPaths } from './ApiAuthorizationConstants';

export const LoginMenu = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const subscription = authService.subscribe(() => populateState());
    populateState();

    return () => {
      authService.unsubscribe(subscription);
    };
  }, []);

  const populateState = async () => {
    const [auth, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()]);
    setIsAuthenticated(auth);
    setUserName(user && user.name);
  };

  const authenticatedView = (userName, profilePath, logoutPath, logoutState) => (
      <>
        <NavItem>
          <NavLink tag={Link} className="text-dark" to={profilePath}>Hello {userName}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink replace tag={Link} className="text-dark" to={logoutPath} state={logoutState}>Logout</NavLink>
        </NavItem>
      </>
  );

  const anonymousView = (registerPath, loginPath) => (
      <>
        <NavItem>
          <NavLink tag={Link} className="text-light" to={registerPath}>Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-light" to={loginPath}>Login</NavLink>
        </NavItem>
      </>
  );

  if (!isAuthenticated) {
    const registerPath = `${ApplicationPaths.Register}`;
    const loginPath = `${ApplicationPaths.Login}`;
    return anonymousView(registerPath, loginPath);
  } else {
    const profilePath = `${ApplicationPaths.Profile}`;
    const logoutPath = `${ApplicationPaths.LogOut}`;
    const logoutState = { local: true };
    return authenticatedView(userName, profilePath, logoutPath, logoutState);
  }
}
