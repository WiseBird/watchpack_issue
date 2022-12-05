module.exports = {
    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: []
    }
}
