
import { Redislimit } from '@upstash/redislimit';
import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';
dotenv.config({path:"./.env"});


const redislimit = new Redislimit({
  redis: Redis.fromEnv(),
  limiter: Redislimit.fixedWindow(5, '10s'),
  analytics: true,
})

export default redislimit;