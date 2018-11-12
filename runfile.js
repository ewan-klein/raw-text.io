// https://github.com/pawelgalazka/runjs#handling-arguments

const { run } = require('runjs')

// https://www.npmjs.com/package/gatsby-lumen-post-generator
function newpost(title) {
    run(`npm run lumen-post title="${title}"`)
    //  console.log('Title = ${title}')
}


module.exports = {
    newpost
}