module.exports = {

  friendlyName: 'Get all user posts',

  description: 'Get all user posts by user id',

  inputs: {
    userId: {
      type: 'number',
      required: true
    }
  },

  exits: {
  },

  fn: async function (inputs) {

    //return recent add post
    const posts = await Post.find({ postOwner: inputs.userId })

    if (posts != null) {
      return posts
    } else {
      return []
    }
  }
};
