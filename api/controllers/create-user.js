module.exports = {

  friendlyName: 'Create user',

  description: 'add new user to database',

  inputs: {
    name: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    }
  },

  exits: {
    existingUser: {
      description: 'User already registered',
      responseType: 'serverError'
    }
  },

  fn: async function (inputs) {

    const user = await User.findOne({email: inputs.email})

    if (user != null) { 
      throw 'existingUser'
    } 

    await User.create({name: inputs.name, email: inputs.email, password: inputs.password})

    return 'New user has been created'
  }
};
