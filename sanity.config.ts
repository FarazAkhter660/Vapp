import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
// Update the import path if your schema file is named differently or in another folder
import { schemaTypes } from "../VERA-APP/sanity-schemas";

export default defineConfig({
  name: 'vera-studio',
  title: 'Vera Studio',
  
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'lq0pyn3p',
  dataset: process.env.SANITY_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})