const path = require('path');
function resolve(dir) {
    path.join(__dirname, '..', dir)
}

module.exports = {
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
            'src/assets': resolve('assets'),
            'src/components': resolve('components'),
            'src/views': resolve('views')
        }
    },
    devServer: {
        open: true
    }
}

