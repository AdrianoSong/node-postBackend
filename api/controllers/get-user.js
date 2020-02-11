module.exports = {

  friendlyName: 'Get user',

  description: 'Get User from login',

  inputs: {
    email: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: false
    }
  },

  exits: {
    userNotFound: {
      description: 'User not found',
      responseType: 'serverError'
    }
  },

  fn: async function (inputs) {

    const user = await User.findOne({email: inputs.email, password: inputs.password})

    if (user != null ) {
      // All done.
      return user;

    } else {
      throw 'userNotFound'
    }
  }
};
