const scripts = assets => Object.keys(assets).reduce((scripts, key) => scripts + `<script src="/${ assets[key].js }"></script>`, '')

module.exports = scripts