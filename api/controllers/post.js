
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
    }
  },

  exits: {

  },

  fn: async function (inputs) {

    await Post.create({title: inputs.title, body: inputs.postDescription}) 

    return;
  }
};
