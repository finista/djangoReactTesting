/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_IS_PROD: string
    readonly VITE_TEST: string
    readonly APP_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}