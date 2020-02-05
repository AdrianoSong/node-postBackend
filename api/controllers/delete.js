module.exports = {

  friendlyName: 'Delete',
  description: 'Delete something.',

  inputs: {
    postId: {
      type: 'string',
      required: true
    }
  },

  exits: {
    invalid: {
      description: 'This was an invalid post to delete'
    },
    recordNotExist: {
      description: 'Record do not exist with'
    }
  },

  fn: async function (inputs) {

    const recordDeleted = await Post.destroy({id: inputs.postId}).fetch()

    if (recordDeleted.length == 0) {
      throw({recordNotExist: {error: 'Record do not exist'}})
    }
    //if you want to send to the front the deleted object 
    //pass it into return statement: return recordDeleted
    return;
  }
};
