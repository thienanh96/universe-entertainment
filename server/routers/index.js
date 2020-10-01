const express = require("express");
const router = express.Router();
const camelcaseKeys = require("camelcase-keys");

const models = require("../models");
// const { requireAuthentication } = require("./middlewares");

router.post("/film", createFilm);

async function createFilm(req, res) {
  try {
    const { title, description, coverUrl, videoUrl } = req.body;
    const newFilm = await models.Film.create({
      title,
      description,
      cover_url: coverUrl,
      video_url: videoUrl
    });
    const data = newFilm.get({ plain: true });
    return res.status(200).send({
      success: true,
      data: camelcaseKeys(data)
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

router.post("/film/tag", createFilmTag);

async function createFilmTag(req, res) {
  try {
    const { tagId, filmId } = req.body;
    const newFilmTag = await models.FilmTag.create({
      tag_id: tagId,
      film_id: filmId
    });
    const data = newFilmTag.get({ plain: true });
    return res.status(200).send({
      success: true,
      data: camelcaseKeys(data)
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

router.get("/film", getFilms);

async function getFilms(req, res) {
  try {
    const { limit = 10, offset = 0, tagIds, orderBy } = req.query;
    const tagIdsArray = tagIds ? tagIds.split(",") : null;

    const renderJoinSql = () => {
      return `INNER JOIN public.film_tag ft ON ft.film_id = f.film_id \
      AND ft.tag_id IN (${tagIdsArray.join(",")}) `;
    };

    const query = ` 
      SELECT * FROM public.film f \
      ${tagIdsArray ? renderJoinSql() : ""} \
      WHERE f.film_id IN (
        SELECT film_id FROM public.film
        ORDER BY ${orderBy} DESC \
        OFFSET ${offset} LIMIT ${limit}
      )
    `;
    const rows = await models.sequelize.query(query, {
      type: models.sequelize.QueryTypes.SELECT
    });
    return res.status(200).send({
      success: true,
      data: camelcaseKeys(rows)
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

router.post("/tag", createTag);

async function createTag(req, res) {
  try {
    const { title, isMain } = req.body;
    const entity = {};
    if (title) {
      entity.title = title;
    }
    if (typeof isMain === "boolean") {
      entity.is_main = isMain;
    }
    const newTag = await models.Tag.create(entity);
    const data = newTag.get({ plain: true });
    return res.status(200).send({
      success: true,
      data: camelcaseKeys(data)
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

router.get("/tag", getTags);

async function getTags(req, res) {
  try {
    const { limit = 20, offset = 0, orderedBy, isMain } = req.query;
    const condition = {};
    if (typeof isMain === "boolean") {
      condition.is_main = isMain;
    }
    const order = [];
    if (orderedBy === "total_view") {
      order.push(["total_view", "DESC"]);
    }
    if (orderedBy === "total_like") {
      order.push(["total_like", "DESC"]);
    }
    const listTags = await models.Tag.findAll({
      where: condition,
      order,
      limit,
      offset
    });
    const data = listTags.map((tag) => tag.get({ plain: true }));
    return res.status(200).send({
      success: true,
      data: camelcaseKeys(data)
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

module.exports = router;
