const styles = assets => Object.keys(assets).reduce((styles, key) => styles + ( assets[key].css ? `<link rel="stylesheet" href="/${ assets[key].css }" />` : ''), '')

module.exports = styles