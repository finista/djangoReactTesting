export default {
    input: ['imports/**/*.{js,jsx,ts,tsx}'],
    output: 'locales/$LOCALE/$NAMESPACE.json',
    defaultNamespace: 'translation',
    locales: ['en', 'ru'],
    useKeysAsDefaultValue: true
}