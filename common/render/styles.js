const styles = assets => Object.keys(assets).reduce((styles, key) => styles + ( assets[key].css ? `<link rel="stylesheet" href="/dev${ assets[key].css }" />` : ''), '')

module.exports = styles