import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  console.log('navgiatgion nav. navigationref. current, name, param', navigationRef.current, name, params)

  navigationRef.current?.navigate(name, params);
}

export const push = (name, params) => {
  console.log('navgiatgion push. navigationref, current,name param', navigationRef, navigationRef.current, name, params)

  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export const pop = (count = 1) => {
  console.log('navgiatgion pop. navigationref, current,name param', navigationRef, navigationRef.current)

  navigationRef.current?.dispatch(StackActions.pop(count));
}
export const popToTop = () => {
  console.log('navgiatgion popToTop. navigationref, current,name param', navigationRef, navigationRef.current)

  navigationRef.current?.dispatch(StackActions.popToTop());
}

