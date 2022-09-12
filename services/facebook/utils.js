const { PrismaClient, Prisma } = require("@prisma/client");
const { FB } = require("fb");
const prisma = new PrismaClient();

const facebookApiReq = (query) =>
  new Promise((resolve, reject) => {
    FB.api(query, function (d) {
      if (!d || d.error) {
        console.log(!d ? "error occurred" : d.error);
      }
      resolve(d);
    });
  });

const saveInternalUserData = async (data) => {
  
};

const getUser = async () => {
  const user = await facebookApiReq("/me?fields=id,name,email");
  return user;
};

const saveUser = async (user, cookie) => {
  user.facebook_id = user.id;

  const creator = await prisma.Creator.create({
    data: {
      firstName: cookie.firstName,
      lastName: cookie.lastName,
      password: cookie.password,
      email: cookie.email,
    },
  });
  user.creator = creator.id
  user.birthDay  = new Date(cookie.birthDate)
  user.deathDay = new Date(cookie.passingDate)
  user.about = cookie.about
  delete user.id;

  return await prisma.User.upsert({
    where: { facebook_id: user.facebook_id },
    update: user,
    create: user,
  });
};

const handleUser = async (cookie) => {
  const user = await getUser();
  return await saveUser(user, cookie);
};

const getPosts = async () => {
  const posts = await facebookApiReq(
    "me/feed?fields=full_picture,source,message,created_time,shares,reactions.summary(total_count),comments.summary(total_count),message_tags,actions"
  );

  return posts;
};

const savePosts = async ({ user, posts }) => {
  return posts.data.map(async (post) => {
    let type = post.source ? "video" : post.image ? "image" : "text";
    const record = {
      facebook_id: post.id,
      userId: user.id,
      type,
      text: post.message,
      video: post.source || "",
      image: post.full_picture || "",
      likes: post.reactions.summary.total_count,
      comments: post.comments.summary.total_count,
      posted_date: new Date(post.created_time),
    };
    return prisma.Post.upsert({
      where: { facebook_id: record.facebook_id },
      create: record,
      update: record,
    });
  });
};

const handlePosts = async (user) => {
  const posts = await getPosts();
  return await savePosts({ user, posts });
};

const getPageLiked = async () => {
  const pageLikes = await facebookApiReq(
    "me/likes?fields=about,picture.height(200),created_time"
  );
  return pageLikes;
};

const savePageLiked = async ({ user, pageLikes }) => {
  return pageLikes.data.map(async (like) => {
    const record = {
      facebook_id: like.id,
      userId: user.id,
      image: JSON.stringify(like.picture.data),
      time_liked: new Date(like.created_time),
    };
    return prisma.PagesLiked.upsert({
      where: { facebook_id: record.facebook_id },
      create: record,
      update: record,
    });
  });
};

const handlePageLiked = async (user) => {
  const pageLikes = await getPageLiked();
  return await savePageLiked({ user, pageLikes });
};

const getProfileImages = async () => {
  const albums = await facebookApiReq("me/albums");
  const profileAlbum = albums.data.find((v) => v.name === "Profile pictures");
  let profileImages;
  if (profileAlbum) {
    profileImages = await facebookApiReq(
      "442741063651/photos?fields=images,created_time,likes.summary(total_count),comments.summary(total_count)"
    );
  }
  return profileImages;
};

const saveProfileImages = async ({ user, profileImages }) => {
  return profileImages.data.map(async (image) => {
    const imagesJson = JSON.stringify(image.images);
    const record = {
      facebook_id: image.id,
      userId: user.id,
      image: imagesJson || "{}",
      likes: image.likes.summary.total_count,
      comments: image.comments.summary.total_count,
      posted_date: new Date(image.created_time),
    };
    return prisma.ProfileImages.upsert({
      where: { facebook_id: record.facebook_id },
      create: record,
      update: record,
    });
  });
};

const handleProfileImages = async (user) => {
  const profileImages = await getProfileImages();
  return await saveProfileImages({ user, profileImages });
};

module.exports = {
  handlePageLiked,
  handlePosts,
  handleProfileImages,
  handleUser,
  saveInternalUserData,
};
