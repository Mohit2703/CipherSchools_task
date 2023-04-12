import jwt from 'jsonwebtoken';
import { jwtSecret } from './config.js';

const jwtVerify = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {   
        return res.status(401).json({ error: 'token is not present' });
    }

    jwt.verify(token, jwtSecret, (err, payload) => {
        if (err || !payload) {
            return res.status(401).json({ error: 'unauthorized' });
        }

        console.log(payload);

        req.userId = payload.id;
        return next();
    });
}

export { jwtVerify }