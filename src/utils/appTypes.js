export const F_RootReducer = (state, data) => state;

export const T_SystemInfo = {
    backendVersion: ''
};

export const T_PartnerInfo = {
    id: '',
    name: '',
    firstName: ''
};

export const T_UserInterface = {
    isLoading: false,
    languageCode: ''
};

export const T_RootReducer = {
    ui: F_RootReducer,
    systemInfo: F_RootReducer,
    partnerInfo: F_RootReducer
};

export const T_Store = {
    ui: T_UserInterface,
    systemInfo: T_SystemInfo,
    partnerInfo: T_PartnerInfo
};