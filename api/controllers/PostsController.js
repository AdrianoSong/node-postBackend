//This is the classic way to create an API
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

    findbyid: function(request, response) {
        const postId = request.param('postId')

        const filterAllPost = allPosts.filter(post => {return post.id == postId})

        if (filterAllPost.length > 0) {
            response.send(filterAllPost[0])
        } else {
            response.send('failed to find post my id: ' + postId)
        }
    }
}