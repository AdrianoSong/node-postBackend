
//This is the new way to create an API
//Sails framework can create an action for you typing in the terminal: 
//sails generate action post
module.exports = {
  friendlyName: 'Post',
  description: 'Post something.',

  inputs: {
    title: {
      type: 'string',
      required: true
    },
    postDescription: {
      type: 'string',
      required: true
    },
    userId: {
      type: 'number',
      required: true
    }
  },

  exits: {
    postNotCreated: {
      description: 'Post not created',
      responseType: 'serverError'
    }
  },

  fn: async function (inputs) {

    const user = await User.findOne({id: inputs.userId})

    if (user != null) {
      await Post.create({ title: inputs.title, body: inputs.postDescription, postOwner: user.id }) 
      
      //return recent add post
      const newPost = await Post.findOne({ title: inputs.title, body: inputs.postDescription, postOwner: user.id })
      return newPost
    
    } else {
      return 'postNotCreated'
    }
  }
};
