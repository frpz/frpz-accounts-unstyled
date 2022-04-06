Package.describe({
  summary: 'Semantic UI Components for Useraccounts-React',
  version: '1.0.0',
  name: 'frpz:accounts-unstyled',
  git: 'https://github.com/royGil/useraccounts-react.git'
})

Package.onUse(api => {
  api.versionsFrom('2.7.1')

  api.use('ecmascript')
  api.mainModule('index.js', ['client', 'server'])
})
