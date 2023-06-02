/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  app.get('/xrpc/app.bsky.feed.getFeedSkeleton', (request, reply) => {
    reply.send({
      feed: [
        { post: 'at://did:plc:tpg43qhh4lw4ksiffs4nbda3/app.bsky.feed.post/3jx7krehif426' }
      ]
    });
  });
};
