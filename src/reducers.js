import { combineReducers } from 'redux'
import { SET_ACTIVE_TAB, POPULATE_TABS } from './actions';

const TABREDUCERS = {
    tabs: []
}

function tabValues(state = TABREDUCERS, action) {
    switch(action.type) {
        case SET_ACTIVE_TAB:
            return {
                tabs: state.tabs.map((item, index) => {
                    if(index!== action.index) {
                        return {
                            ...item,
                            isActive: false
                        }
                    }

                    return {
                        ...item,
                        isActive: true
                    }
                })
                
            }
        case POPULATE_TABS:
            return {
                tabs: action.payload
            }
        default:
            return state
    }
}

const tabsApp = combineReducers({
    tabValues
})

export default tabsApp;
