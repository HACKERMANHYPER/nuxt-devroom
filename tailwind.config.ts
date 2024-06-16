import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'hd-blue': '#2563eb',
                'hd-white': '#f2f5fd',
                'hd-black': '#0e171e',
            },
        },
        fontFamily: {
            'display': ['Gotham Ultra'],
        }
    },
}