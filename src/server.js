'use strict';
import dotenv from 'dotenv';
import * as path from 'path';
import Inert from 'inert';

dotenv.config( {
    path: path.join(path.resolve(), './.env'),
})

import Hapi from '@hapi/hapi';
import routesArr from './routes.js';
import AuthBearer from 'hapi-auth-bearer-token';
import makeAdminAuth from './auth/adminAuth.js';
import makeUserAuth from './auth/userAuth.js';

const init = async () => {

    const server = Hapi.server({
        port: parseInt(process.env.PORT || 5000),
        host: process.env.HOST || 'localhost',
        routes: {
            validate: {
                failAction: (req, h, err) => {
                    throw err;
                },
            },
            cors: {
                origin: ['*'],
                credentials: true,
                headers: ["Accept", "Content-Type", "Authorization", "Access-Control-Allow-Methods", "GET, PUT, POST, DELETE"],
                additionalHeaders: ['X-Requested-With', 'postNumber', "Authorization"]
            },
        }
    });

    await server.register( [
        AuthBearer,
        Inert
    ]);

    makeAdminAuth(server);
    makeUserAuth(server);

    server.route(routesArr)

    await server.start(routesArr);
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();