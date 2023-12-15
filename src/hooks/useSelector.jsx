import { useContext } from 'react';
import { StoreContext } from '../context/Store';

export default function useSelector(callback) {
  const { state } = useContext(StoreContext);
  return callback(state);
}