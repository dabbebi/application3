var client = require('../shared/client');

export const getPosts = () => {
    return client.get("/data");
};

export const getOnePost = (id) => {
    return client.get("/data/"+id);
};

export const createPost = (post) => {
    return client.post("/data", post);
}

export const deletePost = (id) => {
    return client.delete("/data/" + id);
}
