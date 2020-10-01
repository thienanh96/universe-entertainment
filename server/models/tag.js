module.exports = (sequelize, DataTypes) => {
    //column from 'media_verify' database table
    const attributes = {
      tag_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      is_main: DataTypes.STRING,
      total_view: DataTypes.INTEGER,
      total_like: DataTypes.INTEGER,
      created_at: DataTypes.DATE
    };
    const options = {
      sequelize,
      schema: "public",
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      tableName: "tag"
    };
  
    const Tag = sequelize.define("Tag", attributes, options);
  
    return Tag;
  };
  