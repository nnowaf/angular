const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://localhost:26",
        secure: false
    }
]
module.exports = PROXY_CONFIG