
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';
dotenv.config({path:"./.env"});


const ratelimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.fixedWindow(5, '10 s'), 
  analytics: true,
  prefix: '@upstash/ratelimit',
});

export default ratelimiter;