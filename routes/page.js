// Other pages
import Cosmic from 'cosmicjs'
import moment from 'moment'
module.exports = (app, config, partials) => {
  app.get('/:slug', (req, res) => {
    const slug = req.params.slug
    Cosmic.getObjects({ bucket: { slug: config.COSMIC_BUCKET } }, (err, response) => {
      res.locals.cosmic = response
      const posts = response.objects.type.posts
      // Pagination
      let page = 1
      if (req.query.page)
        page = Number(req.query.page)
      const per_page = 5
      const offset = (page - 1) * per_page
      const current_posts = posts.slice(offset, offset + per_page)
      // Sort
      const sorted_posts = current_posts.sort(post => {
        if (post.metafield.published)
          return moment(post.metafield.published.value).format('YYYMMDD') * -1
      })
      // Friendly dates
      const friendly_date_posts = sorted_posts.map(post => {
        let published_friendly = 0
        if (post.metafield.published)
          published_friendly = moment(post.metafield.published.value).format('MMMM Do, YYYY')
        post.published_friendly = published_friendly
        return post
      })
      // Get current page / post
      const objects = response.objects.all
      objects.forEach(page => {
        if (page.slug === slug) {
          let published_friendly = 0
          if (page.metafield && page.metafield.published)
            published_friendly = moment(page.metafield.published.value).format('MMMM Do, YYYY')
          page.published_friendly = published_friendly
          res.locals.page = page
        }
      })
      if (!res.locals.page) {
        return res.render('404.html', {
          partials
        })  
      }
      if (req.url === '/work') {
        partials['work-big'] = 'partials/work-big'
        return res.render('work.html', {
          partials
        })  
      }
      // Test if post
      if (res.locals.page.type_slug === 'posts')
        res.locals.page.is_post = true
      res.locals.cosmic.objects.type.posts = friendly_date_posts
      return res.render('page.html', {
        partials
      })
    })
  })
}