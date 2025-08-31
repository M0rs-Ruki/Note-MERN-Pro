
import redislimit from '../db/upstash.DB.js';


const redisLimit = async (req, res, next) => {

    try {
        const ip = req.socket.remoteAddress;
        // const {success} = await redislimit.limit("My-limit-key");
        const {success} = await redislimit.limit(ip);
        if (!success) return res.status(429).send("Too Many Requests");
        next();
    } catch (error) {
        console.log(`Error In Redis Limit: ${error}`);
        res.throw.status(500).send("Internal Server Error On Redis Limit");
    }
}

export default redisLimit;