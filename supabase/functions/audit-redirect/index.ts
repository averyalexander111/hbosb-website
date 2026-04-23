Deno.serve((req) => {
  const url = new URL(req.url);
  const dest = `https://heartbeatofsouthbay.com/assessment${url.search}`;
  return new Response(null, {
    status: 301,
    headers: {
      Location: dest,
      "Cache-Control": "public, max-age=86400",
    },
  });
});
