/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
	console.log(req.user);
  res.render('home', {
    title: 'Katıl'
  });
};
