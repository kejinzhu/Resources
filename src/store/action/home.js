import * as TYPES from '../action-types';
import { getSliders } from '../../api/home';
let home = {
    getSliders() {
        //Actions must be plain objects. Use custom middleware for async actions
        // dispatch(action);
        return function (dispatch, getState) {
            //调用后台接口，得到返回值，再派发真正action
            getSliders().then(sliders => {
                dispatch({
                    type: TYPES.SET_HOME_SLIDERS,
                    payload: sliders
                });
            });
        }
    }
};
export default home;