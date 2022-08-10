const { FB } = require("fb");

const facebookApiReq = (query) =>
  new Promise((resolve, reject) => {
    FB.api(query, function (d) {
      if (!d || d.error) {
        console.log(!d ? "error occurred" : d.error);
      }
      resolve(d);
    });
  });

const collectFacebookData = async (req, res) => {
  const token = req.query.access_token;
  if (token) {
    FB.setAccessToken(token);
    const posts = await facebookApiReq(
      "me/feed?fields=full_picture,source,message,shares,reactions.summary(total_count),comments.summary(total_count),message_tags,actions"
    );

    const pageLikes = await facebookApiReq(
      "me/likes?fields=about,picture.height(200)"
    );

    const albums = await facebookApiReq("me/albums");
    const profileAlbum = albums.data.find((v) => v.name === "Profile pictures");
    let profileImages;
    if (profileAlbum) {
      profileImages = await facebookApiReq("442741063651/photos?fields=images");
    }

    //https://graph.facebook.com/v13.0/10158842065863652/posts?access_token=${token}&fields=message_tags%2Csource%2Cactions%2Cchild_attachments%2Cmessage%2Cfull_picture%2Cproperties%2Cattachments&until=1649699503&since&__paging_token=enc_AdD44zABpdFoRNXqyZASqGZAXa6n8QmINVy3LwPhy6Sz9H1zfyK3z0zkVe3DYyj18s0O3kM4VNe0IA1jnUhzgN2gDExMcxadAqjXF7LVFB7kt0bi50NFSlmoWTohrVhqOThcUZD&__previous
console.log( "pageLikes=>",
pageLikes.data,
"posts=>",
posts,
"profile pics=>",
profileImages);
    res.json([
      "pageLikes=>",
      pageLikes.data,
      "posts=>",
      posts.data,
      "profile pics=>",
      profileImages
    ]);

    //profile picures
    //me/albums => Profile pictures
    //442741063651/photos?fields=images

    //page likes

    //all posts
    //me/feed?fields=full_picture,source,,message,shares,reactions.summary(total_count),comments.summary(total_count),message_tags,actions

    return;
  }

  //https://localhost:8443/?#access_token=EABJNMCST0qwBAPCCLj7mMq0zhBBG7w98SPjcpiQUVLfOdHRUd4HMdovY2SJikh6RZBRV47FjHmIvAZBBagKwEJVdisR8mohaZCGZAecmEJMX8diXCtojL9kBC1RoU8uqx4JjK5WHEfnde2U6AL8RfdlSjZBhy97RLwCzZBYQwXZAVXoFezPtZBk0trAl54mIflTGTp3rskeGMoT7DB8QxhLn&data_access_expiration_time=1667557888&expires_in=5312
  //   res.redirect('https://www.facebook.com/v14.0/dialog/oauth?response_type=token&client_id=5151418748228268&redirect_uri=https://localhost:8443/')
  res.send(`
  <script>  
    const tokenUrl = '/save_facebook_data?'+window.location.hash.replace('#', '')       
    location = tokenUrl    
  </script>
`);
};

const login = (req, res) => {
  res.send(`
  <script>
    const facebookLoginUrl = 'https://www.facebook.com/v14.0/dialog/oauth?response_type=token&client_id=5151418748228268&redirect_uri=https://localhost:8443/save_facebook_data'
  
    location = facebookLoginUrl
    
  </script>
`);
};

module.exports = { collectFacebookData, login };
