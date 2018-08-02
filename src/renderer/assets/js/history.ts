import createHistory from 'history/createBrowserHistory';
import { store } from '@/store';
// import { IUserCommon } from '@/store/User';
const history = createHistory({
  basename: '/',
});

export default history;
