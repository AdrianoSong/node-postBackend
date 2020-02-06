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
    creatingSuccess: {
      description: 'New user has been created'
    },

    existingUser: {
      description: 'User already registered'
    }
  },

  fn: async function (inputs) {

    const user = await User.find()
    user.filter(function(user){ 
      return user.email == inputs.email
    })

    if (user.length > 0) {
      throw 'existingUser'
    } 

    await User.create({name: inputs.name, email: inputs.email, password: inputs.password})

    return 'creatingSuccess'
  }
};
