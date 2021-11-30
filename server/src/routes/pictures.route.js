const router = require('express').Router();
const { Picture, Like } = require('../models');
const { hasLoggedIn } = require('../middlewares/auth');

router.post('/', hasLoggedIn, async (req, res) => {
  try {
    const { url, description } = req.body;
    const picture = await Picture.create({ url, description, userId: req.user.id });
    res.status(201).send(picture);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.get('/', async (req, res) => {
  try {
    const pictures = await Picture.findAll({ include: ['User', 'Likes'] });
    res.send(pictures);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.get('/:pictureId', async (req, res) => {
  try {
    const results = await Picture.findAll({ where: { id: req.params.pictureId } });
    const picture = results[0];
    res.send(picture);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.patch('/:pictureId/like', hasLoggedIn, async (req, res) => {
  try {
    const picture = await Picture.findOne({ where: { id: req.params.pictureId }, include: Like });
    if (!picture) return res.sendStatus(404);
    if (picture.Likes.some((like) => like.userId === req.user.id)) return res.status(400).send('Had been like to this picture');

    const like = Like.create({ userId: req.user.id, pictureId: req.params.pictureId });
    res.send(like);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.patch('/:pictureId/unlike', hasLoggedIn, async (req, res) => {
  try {
    const result = Like.destroy({
      where: { userId: req.user.id, pictureId: req.params.pictureId },
    });
    if (!result) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.patch('/:pictureId', hasLoggedIn, async (req, res) => {
  try {
    const result = await Picture.update(req.body, {
      where: { id: req.params.pictureId },
      returning: true,
      // plain: true,
    });
    const picture = result[1];

    if (!picture) res.sendStatus(404);

    res.send(picture);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete('/:pictureId', hasLoggedIn, async (req, res) => {
  try {
    const result = await Picture.destroy({
      where: {
        id: req.params.pictureId,
        userId: req.user.id,
      },
    });
    if (!result) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
