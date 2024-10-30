import preset from '../../../../vendor/filament/filament/tailwind.config.preset'
import daisyui from "daisyui"

export default {
    presets: [preset],
    content: [
        './app/**/*.php',
        './resources/views/filament/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
        'resources/css/filament/admin/theme.css',
        './app/Livewire/**/*.php',
        './resources/views/livewire/**/*.blade.php',
    ],
    plugins: [
        ...preset.plugins,
        daisyui,
    ],
}
