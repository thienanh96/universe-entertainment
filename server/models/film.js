module.exports = (sequelize, DataTypes) => {
  //column from 'media_verify' database table
  const attributes = {
    film_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    created_at: DataTypes.DATE,
    cover_url: DataTypes.STRING,
    video_url: DataTypes.STRING,
    num_like: DataTypes.INTEGER,
    num_view: DataTypes.INTEGER
  };
  const options = {
    sequelize,
    schema: "public",
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    tableName: "film"
  };

  const Film = sequelize.define("Film", attributes, options);

  return Film;
};
