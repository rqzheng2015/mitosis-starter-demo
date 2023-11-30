/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
    files: 'src/**',
    targets: ['solid', 'react', 'vue3'],
    dest: "dist",
    options: {
        solid: {
            typescript: true,
            stylesType: 'styled-components'
        },
        react: {
            typescript: true,
            stylesType: "style-tag",
        },
        vue3: {
            typescript: true,
            api: "composition"
        }
    }
};