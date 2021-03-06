module.exports = {
    attributes: {
        name: {
            type: 'string'
        },
        email: {
            type: 'string',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true
        },

        //reference to Posts
        posts: {
            collection: 'post',
            via: 'postOwner'
        }
    }
}