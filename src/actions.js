
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const POPULATE_TABS = 'POPULATE_TABS';

export function populateTabs(newValue) {
    return {
        type: POPULATE_TABS,
        payload: newValue
    }
}

export function setActiveTab(tabIndex) {
    return {
        type: SET_ACTIVE_TAB,
        index: tabIndex
    }
}