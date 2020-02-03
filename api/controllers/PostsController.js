module.exports = {
    // async await version
    posts: async function(request, response) {
        try {
            const posts = await Post.find()
            response.send(posts)
        } catch (error) {
            Response.serverError(error.toString())
        }
    },

    // more declative version old style (not using async await)
    create: function(request, response) {
        const title = request.param('title')
        const body = request.param('body')
        
        sails.log.debug('Sails log debug msg ' + title)
        sails.log.warn('Sails log warning msg ' + title)
        sails.log.error('Sails log error msg ' + title)

        Post.create({title: title, body: body}).exec(function(error) {

            if (error) {
                return response.serverError(error.toString())
            }

            sails.log.debug('finish creation post object')
            response.send('creation has been executed')
            return response.end()
        })
    },

    findbyid: function(request, response) {
        const postId = request.param('postId')

        const filterAllPost = allPosts.filter(post => {return post.id == postId})

        if (filterAllPost.length > 0) {
            response.send(filterAllPost[0])
        } else {
            response.send('failed to find post my id: ' + postId)
        }
    },

    delete: async function(request, response) {
        try {
            const postId = request.param('postId')
            await Post.destroy({id: postId})
            response.send('Finished deleting a post with id ' + postId)
        
        } catch (error) {
            response.serverError(error.toString())
        }
        
    }
}