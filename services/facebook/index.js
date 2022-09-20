require('dotenv').config()
const { FB } = require("fb");

const { handlePageLiked, handlePosts, handleProfileImages, handleUser, saveInternalUserData} = require('./utils')



const collectFacebookData = async (req, res) => {
  const token = req.query.access_token;
  if (token) {
    FB.setAccessToken(token);
    console.log(JSON.parse(req.cookies.userData));
    const user = await handleUser(JSON.parse(req.cookies.userData));
    try {
      const posts = await handlePosts(user);
    } catch(e){
      console.log("no posts");
    }
    try {
      const pageLiked = await handlePageLiked(user);
    } catch(e) {
      console.log("no page likes");
    }
    try {
    const profileImages= await handleProfileImages(user)
    } catch(e) {
      console.log("no profile images");
    }
    res.redirect(`/${user.facebook_id}`);

    return;
  }

  res.send(`
  <h3 style="width:100%;text-align:center;margin-top:100px"> Loading... </h3>
  <script>  
    const tokenUrl = '/save_facebook_data?'+window.location.hash.replace('#', '')       
    location = tokenUrl    
  </script>
`);
};

const login = async (req, res) => {
  
  
  // res.json(req.cookies)
  res.send(`
  <h3 style="width:100%;text-align:center;margin-top:100px"> Loading... </h3>
  <script>
    const facebookLoginUrl = 'https://www.facebook.com/v14.0/dialog/oauth?response_type=token&client_id=5151418748228268&client_secret=c80685ac9f29d88fec5673d7a276be98&redirect_uri=${process.env.FACEBOOK_RETURN_URL}/save_facebook_data'  
    location = facebookLoginUrl
  </script>
`);
};

module.exports = { collectFacebookData, login };
