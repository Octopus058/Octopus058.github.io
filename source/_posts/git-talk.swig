<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css" />  
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>  
  
<div id="gitalk-container"></div>  
  
<script type="text/javascript">  
  var gitalk = new Gitalk({  
    clientID: "{{theme.git_talk.clientID}}",  
    clientSecret: "{{theme.git_talk.clientSecret}}",  
    repo: "octopus058.github.io", // 博客仓库地址  
    owner: "octopus058", // github 用户名  
    admin: ["octopus058"], // github 用户名  
    perPage: 20,  
    id: location.pathname.slice(0, 50), // 查找 issus 的条件，后面将对 id 有针对逻辑  
    title: "{{page.title}}",  
    body: "🚀 " + location.href + "\n\n欢迎通过 issues 留言", // 初始化后，issues 的内容  
  });  
  gitalk.render("gitalk-container");  
</script>