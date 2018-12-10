module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:9081",
            },
        },
    },
    css: {
        extract: false,
    },
}
