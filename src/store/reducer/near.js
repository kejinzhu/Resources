import * as TYPES from '../action-types';
let INIT_STATE = {};
export default function near(state = INIT_STATE, action) {
    //深克隆state
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
    }
    return state;
}