const express = require("express");
const axios = require("axios");
const https = require("https");
const { FB } = require("fb");
const fs = require("fs");
const app = express();

app.get("/", async (req, res) => {
  const token = req.query.access_token;
  if(token) {
      try {

        //   const r = await axios.get(`https://graph.facebook.com/v14.0/oauth/access_token?client_id=5151418748228268&client_secret=c80685ac9f29d88fec5673d7a276be98&code=${code}&redirect_uri=https://localhost:8443/`)
        //   const token = req.query.access_token;
          console.log(token);
          //https://graph.facebook.com/v13.0/10158842065863652/posts?access_token=${token}&fields=message_tags%2Csource%2Cactions%2Cchild_attachments%2Cmessage%2Cfull_picture%2Cproperties%2Cattachments&until=1649699503&since&__paging_token=enc_AdD44zABpdFoRNXqyZASqGZAXa6n8QmINVy3LwPhy6Sz9H1zfyK3z0zkVe3DYyj18s0O3kM4VNe0IA1jnUhzgN2gDExMcxadAqjXF7LVFB7kt0bi50NFSlmoWTohrVhqOThcUZD&__previous
          FB.setAccessToken(token);
            FB.api('me/posts?fields=message&limit=1,2', function (d) {
                if(!d || d.error) {
                console.log(!d ? 'error occurred' : d.error);                
                }
                console.log(d.paging.next);                
                res.json(d.data);
               
            });
      } catch(e) {
          console.log(e);
          res.send(e);
          return ;
      }
      return ;
  }
  
  //https://localhost:8443/?#access_token=EABJNMCST0qwBAPCCLj7mMq0zhBBG7w98SPjcpiQUVLfOdHRUd4HMdovY2SJikh6RZBRV47FjHmIvAZBBagKwEJVdisR8mohaZCGZAecmEJMX8diXCtojL9kBC1RoU8uqx4JjK5WHEfnde2U6AL8RfdlSjZBhy97RLwCzZBYQwXZAVXoFezPtZBk0trAl54mIflTGTp3rskeGMoT7DB8QxhLn&data_access_expiration_time=1667557888&expires_in=5312
  //   res.redirect('https://www.facebook.com/v14.0/dialog/oauth?response_type=token&client_id=5151418748228268&redirect_uri=https://localhost:8443/')
  res.send(`
  <script>
    if(window.location.hash) {
      alert(window.location.hash)
      location = '/?'+window.location.hash.replace('#', '')      
    } else {
      location = 'https://www.facebook.com/v14.0/dialog/oauth?response_type=token&client_id=5151418748228268&redirect_uri=https://localhost:8443'      
    }
  </script>
`)
  
//   res.send("Hello");
//   res.render("index", { code });
});
app.listen(3000);
const httpsServer = https.createServer(
  { key: fs.readFileSync("key.pem"), cert: fs.readFileSync("cert.pem") },
  app
);
httpsServer.listen(8443);
// FB.api('oauth/access_token', {
//     client_id: '5151418748228268',
//     client_secret: 'c80685ac9f29d88fec5673d7a276be98',
//     grant_type: 'client_credentials'
// }, function (res) {
//     if(!res || res.error) {
//         console.log(!res ? 'error occurred' : res.error);
//         return;
//     }

//     var accessToken = res.access_token;
//     console.log(res.access_token)
//     FB.setAccessToken(res.access_token);
//     FB.api('me?fields=id,name', function (res) {
//         if(!res || res.error) {
//         console.log(!res ? 'error occurred' : res.error);
//         return;
//         }
//         console.log(res.id);
//         console.log(res.name);
//     });

// });
