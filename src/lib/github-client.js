const { retry } = require('@octokit/plugin-retry')
const Octokit = require('@octokit/rest').Octokit.plugin(retry)

const githubClient = new Octokit({
  auth: process.env.GITHUB_TOKEN || 'invalid-placeholder-token',
  userAgent: 'FTF GitHub Bot v0.1.0-beta',
  baseUrl: 'https://api.github.com',
  request: { retries: 3 }
})

module.exports = githubClient
