
module.exports = function(req, res) {
  // Check login here
  res.json({
    token: 'H3kdic8dkHjkd832jd',
    profile: {
      firstname: 'Steve',
      lastname: 'Jobs',
      avatarUrl: 'api/img/steve-jobs.jpg'
    }
  })
}
