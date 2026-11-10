fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', {
  mode: 'no-cors', // 告诉浏览器允许跨域请求
  headers: {
    'Access-Control-Allow-Origin': '*', // 允许所有来源访问
    'Access-Control-Allow-Methods': 'GET' // 允许GET请求
  }
})
  .then(res => {
    console.log(res);
  })
