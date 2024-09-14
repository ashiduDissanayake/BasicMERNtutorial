// /models/posts.js
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postText: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Posts;
};