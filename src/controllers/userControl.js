const mongoose = require('mongoose');
const User = mongoose.model('Users');

module.exports = {
    // INSERT
    async insert (request, response) {
       const users = await User.create(request.body);
       return response.json(users);
    },
    // SELECT
    async index (request, response) {
        const { page } = request.query;
        const users = await User.paginate({}, {page, limit: 5});
        return response.json(users);
    },
    // GET
    async details (request, response) {
        const users = await User.findById(request.params.id)
           .then(() => console.log())
           .catch(err => console.log(err))  
        return response.json(users);
    },
    // UPDATE
    async update (request, response) {
        const users = await User.findByIdAndUpdate(request.params.id, request.body, { new: true });
        return response.json(users);
    },
    // DELETE
    async delete (request, response) {
        await User.findByIdAndRemove(request.params.id);
        return response.send();
    }  
}