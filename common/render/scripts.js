const scripts = assets => Object.keys(assets).reduce((scripts, key) => scripts + `<script src="/dev${ assets[key].js }"></script>`, '')

module.exports = scripts