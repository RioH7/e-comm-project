const Review = require('../models/review');

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.send(reviews);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).send({ error: 'Review not found' });
    res.send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createReview = async (req, res) => {
  try {
    const review = new Review({
      product: req.body.product,
      user: req.body.user,
      comment: req.body.comment,
      rating: req.body.rating,
    });
    await review.save();
    res.send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      {
        product: req.body.product,
        user: req.body.user,
        comment: req.body.comment,
        rating: req.body.rating,
      },
      { new: true }
    );
    if (!review) return res.status(400).send({ message: 'Review not found' });
    res.send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).send({ message: 'Review not found' });
    }
    res.send({ message: 'Review deleted' });
  } catch (error) {
    res.status(400).send(error);
  }
};

export { getReviews, getReviewById, createReview, updateReview, deleteReview };