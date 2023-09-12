import React, { useEffect, useState } from 'react';
import authService from './AuthorizeService';
import { AuthenticationResultStatus } from './AuthorizeService';
import { QueryParameterNames, LogoutActions, ApplicationPaths } from './ApiAuthorizationConstants';

export const Logout = (props) => {
  const [message, setMessage] = useState(undefined);
  const [isReady, setIsReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const action = props.action;
    switch (action) {
      case LogoutActions.Logout:
        if (!!window.history.state.usr.local) {
          logout(getReturnUrl());
        } else {
          setIsReady(true);
          setMessage("The logout was not initiated from within the page.");
        }
        break;
      case LogoutActions.LogoutCallback:
        processLogoutCallback();
        break;
      case LogoutActions.LoggedOut:
        setIsReady(true);
        setMessage("You successfully logged out!");
        break;
      default:
        throw new Error(`Invalid action '${action}'`);
    }

    populateAuthenticationState();
  }, [props]);

  const logout = async (returnUrl) => {
    const state = { returnUrl };
    const isAuthenticated = await authService.isAuthenticated();
    if (isAuthenticated) {
      const result = await authService.signOut(state);
      switch (result.status) {
        case AuthenticationResultStatus.Redirect:
          break;
        case AuthenticationResultStatus.Success:
          await navigateToReturnUrl(returnUrl);
          break;
        case AuthenticationResultStatus.Fail:
          setMessage(result.message);
          break;
        default:
          throw new Error("Invalid authentication result status.");
      }
    } else {
      setMessage("You successfully logged out!");
    }
  };

  const processLogoutCallback = async () => {
    const url = window.location.href;
    const result = await authService.completeSignOut(url);
    switch (result.status) {
      case AuthenticationResultStatus.Redirect:
        throw new Error('Should not redirect.');
      case AuthenticationResultStatus.Success:
        await navigateToReturnUrl(getReturnUrl(result.state));
        break;
      case AuthenticationResultStatus.Fail:
        setMessage(result.message);
        break;
      default:
        throw new Error("Invalid authentication result status.");
    }
  };

  const populateAuthenticationState = async () => {
    const isAuthenticated = await authService.isAuthenticated();
    setIsReady(true);
    setAuthenticated(isAuthenticated);
  };

  const getReturnUrl = (state) => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get(QueryParameterNames.ReturnUrl);
    if (fromQuery && !fromQuery.startsWith(`${window.location.origin}/`)) {
      throw new Error("Invalid return url. The return url needs to have the same origin as the current page.");
    }
    return (state && state.returnUrl) ||
        fromQuery ||
        `${window.location.origin}${ApplicationPaths.LoggedOut}`;
  };

  const navigateToReturnUrl = (returnUrl) => {
    window.location.replace(returnUrl);
  };

  if (!isReady) {
    return <div></div>
  }
  if (!!message) {
    return (<div>{message}</div>);
  } else {
    const action = props.action;
    switch (action) {
      case LogoutActions.Logout:
        return (<div>Processing logout</div>);
      case LogoutActions.LogoutCallback:
        return (<div>Processing logout callback</div>);
      case LogoutActions.LoggedOut:
        return (<div>{message}</div>);
      default:
        throw new Error(`Invalid action '${action}'`);
    }
  }
}