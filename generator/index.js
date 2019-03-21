module.exports = {
  name: 'MEVN_APP',
  async write () {

    // Node.js + Express + MongoDB Backend
    await this.ensureDir('backend')
    await this.composeWith('@codotype/codotype-nodejs-express-mongodb-generator/generator', { scope: 'backend' })

    // Vue.js Frontend
    await this.ensureDir('frontend')
    await this.composeWith('@codotype/codotype-vuejs-generator/generator', { scope: 'frontend' })

    // Docs & Scripts
    await this.composeWith('./base_readmes')
    await this.composeWith('./base_scripts')

  }
}
