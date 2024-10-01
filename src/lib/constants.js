// export const HOST = import.meta.env.VITE_SERVER_URL;

export const RESELLER_ROUTES = "resellers";
export const SIGNUP_ROUTE = `${RESELLER_ROUTES}/signup`;
export const LOGIN_ROUTE = `${RESELLER_ROUTES}/login`;
export const GET_RESELLER_INFO = `${RESELLER_ROUTES}/reseller-info`;
export const UPDATE_PROFILE_ROUTE = `${RESELLER_ROUTES}/update-reseller`;
export const ADD_PROFILE_IMAGE_ROUTE = `${RESELLER_ROUTES}/add-profile-image`;
export const REMOVE_PROFILE_IMAGE_ROUTE = `${RESELLER_ROUTES}/remove-profile-image`;
export const LOGOUT_ROUTE = `${RESELLER_ROUTES}/logout`;
export const GET_ALL_RESELLER_ROUTES = `${RESELLER_ROUTES}/get-resellers`;

export const ADMIN_ROUTES = "admins";
export const GET_ALL_ADMINS = `${ADMIN_ROUTES}/get-admins`
export const GET_ADMIN_INFO = `${ADMIN_ROUTES}/admin-info`;
export const ADMIN_LOGIN = `${ADMIN_ROUTES}/login`;
export const ADMIN_LOGOUT_ROUTE = `${ADMIN_ROUTES}/logout`;

export const SUPPLIER_ROUTES = 'suppliers';
export const SUPPLIER_SIGNUP_ROUTE = `${SUPPLIER_ROUTES}/signup`;
export const SUPPLIER_LOGIN_ROUTE = `${SUPPLIER_ROUTES}/login`;
export const GET_SUPPLIER_INFO = `${SUPPLIER_ROUTES}/supplier-info`;
export const SUPPLIER_UPDATE_PROFILE_ROUTE = `${SUPPLIER_ROUTES}/update-supplier`;
export const SUPPLIER_ADD_PROFILE_IMAGE_ROUTE = `${SUPPLIER_ROUTES}/add-profile-image`;
export const SUPPLIER_REMOVE_PROFILE_IMAGE_ROUTE = `${SUPPLIER_ROUTES}/remove-profile-image`;
export const SUPPLIER_LOGOUT_ROUTE = `${SUPPLIER_ROUTES}/logout`;
export const SEARCH_SUPPLIER_ROUTE = `${SUPPLIER_ROUTES}/search`;
export const GET_SUPPLIER_DETAILS = `${SUPPLIER_ROUTES}/get-supplier`;
export const GET_ALL_SUPPLIER_ROUTES = `${SUPPLIER_ROUTES}/get-suppliers`;

export const CATEGORY_ROUTE = 'categories';
export const GET_ALL_CATEGORIES_ROUTE = `${CATEGORY_ROUTE}/`;
// export const UPLOAD_FILE_ROUTE = `${MESSAGES_ROUTE}/upload-file`;

export const BRAND_ROUTE = 'brands';
export const GET_ALL_BRANDS_ROUTE = `${BRAND_ROUTE}/`;
// export const UPLOAD_FILE_ROUTE = `${MESSAGES_ROUTE}/upload-file`;

export const PRODUCT_ROUTES = 'products';
export const GET_ALL_PRODUCTS = `${PRODUCT_ROUTES}/get-products`;
// export const CREATE_CHANNEL_ROUTE = `${CHANNEL_ROUTES}/create-channel`
// export const GET_USER_CHANNELS_ROUTE = `${CHANNEL_ROUTES}/get-user-channels`;
// export const GET_CHANNELS_MESSAGES_ROUTE = `${CHANNEL_ROUTES}/get-channel-messages`;
export const GET_ALL_PRODUCTS_BY_SUPPLIER_ROUTE = `${PRODUCT_ROUTES}/get-products-supplier`;

export const AD_ROUTES = 'ads';
export const GET_ALL_ADS = `${AD_ROUTES}/get-ads`;
// export const CREATE_CHANNEL_ROUTE = `${CHANNEL_ROUTES}/create-channel`
// export const GET_USER_CHANNELS_ROUTE = `${CHANNEL_ROUTES}/get-user-channels`;
// export const GET_CHANNELS_MESSAGES_ROUTE = `${CHANNEL_ROUTES}/get-channel-messages`;
export const GET_ALL_ADS_BY_SUPPLIER_ROUTE = `${AD_ROUTES}/get-ads-supplier`;

export const CONTACTS_ROUTES = 'contacts';
export const SEARCH_CONTACTS_ROUTE = `${CONTACTS_ROUTES}/search`;
export const GET_DM_CONTACTS_ROUTES = `${CONTACTS_ROUTES}/get-contacts-for-dm`;
export const GET_ALL_CONTACTS_ROUTES = `${CONTACTS_ROUTES}/get-all-contacts`;

export const MESSAGES_ROUTE = 'messages';
export const GET_ALL_MESSAGES_ROUTE = `${MESSAGES_ROUTE}/get-messages`;
export const UPLOAD_FILE_ROUTE = `${MESSAGES_ROUTE}/upload-file`;

export const CHANNEL_ROUTES = 'channel';
export const CREATE_CHANNEL_ROUTE = `${CHANNEL_ROUTES}/create-channel`
export const GET_USER_CHANNELS_ROUTE = `${CHANNEL_ROUTES}/get-reseller-channels`;
export const GET_CHANNELS_MESSAGES_ROUTE = `${CHANNEL_ROUTES}/get-channel-messages`;