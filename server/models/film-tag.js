module.exports = (sequelize, DataTypes) => {
    //column from 'media_verify' database table
    const attributes = {
      film_tag_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      film_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE
    };
    const options = {
      sequelize,
      schema: "public",
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      tableName: "film_tag"
    };
  
    const FilmTag = sequelize.define("FilmTag", attributes, options);
  
    return FilmTag;
  };
  