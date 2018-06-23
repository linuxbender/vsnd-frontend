export const F_RootReducer = (state, data) => state;

export const DE_CH = 'de_CH';
export const DE_FR = 'de_FR';
export const DE_IT = 'de_IT';

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
    languageCode: '',
    translation: {}
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