'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  srconfig: '"testdev"',
  BASE_API:'"http://119.147.171.111:81/digitization-risk-approve"'
})
