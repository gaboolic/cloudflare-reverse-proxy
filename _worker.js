addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url);
    const actualUrlStr = url.pathname.replace("/proxy/","") + url.search + url.hash
  
    const actualUrl = new URL(actualUrlStr)
  
    const modifiedRequest = new Request(actualUrl, {
      headers: {
        ...request.headers,
        'Host': actualUrl.hostname
      },
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  
    const response = await fetch(modifiedRequest);
    const modifiedResponse = new Response(response.body, response);
  
    // 添加允许跨域访问的响应头
    modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
  
    return modifiedResponse;
  }
