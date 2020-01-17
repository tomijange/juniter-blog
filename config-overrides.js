const { override, fixBabelImports, addLessLoader, addBabelPlugin } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addBabelPlugin('@babel/plugin-proposal-export-default-from'),
  
  addLessLoader({
    javascriptEnabled: true,
      modifyVars: { '@primary-color': '#ec6d0f' },
  }),
);
