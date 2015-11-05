Package.describe({
  name: 'praneybehl:react-widgets',
  version: '3.0.0',
  summary: 'An à la carte set of polished, extensible, and accessible inputs built for React',
  git: 'https://github.com/praneybehl/meteor-react-widgets',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  var assets = ['fonts/rw-widgets.eot',
                'fonts/rw-widgets.svg',
                'fonts/rw-widgets.ttf',
                'fonts/rw-widgets.woff',
                'img/loader-big.gif',
                'img/loading.gif'];

  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  if (api.addAssets) {
      api.addAssets(assets, 'client');
  } else {
      api.addFiles(assets, 'client', { isAsset: true });
  }
  api.addFiles('css/react-widgets.css', 'client');
  api.export('ReactWidgets');
  api.export(['DropdownList','Combobox', 'NumberPicker', 'Multiselect', 'SelectList', 'Calendar', 'DateTimePicker']);

});

Npm.depends({
  "react-widgets": "3.0.0",
  "exposify": "0.5.0"
});
