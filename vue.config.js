module.exports = {
    publicPath: './',
    lintOnSave: 'warning',
    assetsDir: 'assets',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
    devServer: {
        open: true,
        port: 8011
    }
}