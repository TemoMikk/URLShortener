const express = require('express')
const shortid = require('shortid')

const app = express()
app.use(express.json())

const urlMap = {}

app.post('/shorten', (req, res) => {
  const { longUrl } = req.body
  const id = shortid.generate()
  urlMap[id] = longUrl
  const shortUrl = `http://localhost:3000/${id}`
  res.json({ shortUrl })
})

app.get('/:id', (req, res) => {
  const { id } = req.params
  const longUrl = urlMap[id]
  if (!longUrl) {
    return res.status(404).send('URL not found')
  }
  res.redirect(longUrl)
})

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000')
})
