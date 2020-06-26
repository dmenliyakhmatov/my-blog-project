export default function (server) {
  server.auth.strategy('admin', 'bearer-access-token', {
    validate: (req, token, h) => {
        const isValid = process.env.ADMIN_TOKEN === token;

        return {
            isValid: true,
            credentials: {},
            artifacts: {},
        }
    }
})
}