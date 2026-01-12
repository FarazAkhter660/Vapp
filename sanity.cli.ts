import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'lq0pyn3p',
        dataset: process.env.SANITY_DATASET || 'production',
    },
    deployment: {
        appId: 'ohfdu18140i5quh5epj5f5bp'
    }
})