module.exports = {
    attributes: {
        title: {
            type: 'string',
            required: true
        },
        body: {
            type: 'string',
            required: true
        },

        //reference to User
        postOwner: {
            model: 'user'
        }
    }
}