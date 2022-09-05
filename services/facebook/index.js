require('dotenv').config()
const { FB } = require("fb");

const { handlePageLiked, handlePosts, handleProfileImages, handleUser} = require('./utils')



const collectFacebookData = async (req, res) => {
  const token = req.query.access_token;
  if (token) {
    FB.setAccessToken(token);
    const user = await handleUser();
    const posts = await handlePosts(user);
    const pageLiked = await handlePageLiked(user);
    const profileImages= await handleProfileImages(user)
    res.redirect(`/${user.facebook_id}`);

    return;
  }

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
    const facebookLoginUrl = 'https://www.facebook.com/v14.0/dialog/oauth?response_type=token&client_id=5151418748228268&client_secret=c80685ac9f29d88fec5673d7a276be98&redirect_uri=${process.env.FACEBOOK_RETURN_URL}/save_facebook_data'  
    location = facebookLoginUrl
  </script>
`);
};

module.exports = { collectFacebookData, login };
