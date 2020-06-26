import database from '../database/connection.js';

export default function (server) {
    server.auth.strategy('user', 'bearer-access-token', {
        validate: async (req, token, h) => {
            const user = await database.user.findOne({ token });
            if (user) {
                //console.log("!!!!!!!! " + user)
                return {
                    isValid: true,
                    credentials: user,
                    artifacts: {},
                };
            }

            return {
                isValid: false,
                credentials: user,
                artifacts: {},
            };
        },
    });
}
