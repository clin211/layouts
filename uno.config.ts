import {
    defineConfig,
    presetUno,
    presetAttributify,
    transformerDirectives,
    transformerVariantGroup,
    presetTypography
} from 'unocss'

export default defineConfig({
    presets: [presetUno(), presetAttributify(), presetTypography()],
    transformers: [transformerDirectives(), transformerVariantGroup()]
})
