// this file is require to have access to GATSBY_ environment variable. It's too late in react view to get these variable
const env = {
    GOOGLE_MAPS_API_AKY: process.env.GATSBY_GOOGLE_MAPS_API_AKY
};

export default env;