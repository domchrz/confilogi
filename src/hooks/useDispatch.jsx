import { useContext } from 'react';
import { StoreContext } from '../context/Store';

export default function useDispatch() {
  const { dispatch } = useContext(StoreContext);
  return dispatch;
}