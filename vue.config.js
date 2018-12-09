module.exports = {
    devServer: {
        proxy: {
            "^/api": {
                target: "http://localhost:9081",
                ws: true,
                changeOrigin: true,
            }
        }
    },
    css: {
        extract: false,
    },
}