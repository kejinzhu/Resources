import * as TYPES from '../action-types';
let INIT_STATE = {
    sliders: [],//此处存放轮播图的数据
};
export default function home(state = INIT_STATE, action) {
    //深克隆state
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        // 获取轮播图数据
        case TYPES.SET_HOME_SLIDERS:
            return { ...state, sliders: action.payload };
    }
    return state;
}