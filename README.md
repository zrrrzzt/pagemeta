#pagemeta [![Build Status](https://travis-ci.org/zrrrzzt/pagemeta.svg?branch=master)](https://travis-ci.org/zrrrzzt/pagemeta)

Node.js module/CLI app for viewing meta data for a webpage.

##Installation

```
$ npm install pagemeta
```

You can also install it globally to use the CLI version

```
$ npm install pagemeta -g
```

##Test

Make sure you have installed [Mocha](http://mochajs.org/) globally or go to the pagemeta folder and do an nmp install.

```
$ npm test
```

##Usage - module

Pass the uri for the page you want to view.

```javascript
var pmd = require('pagemeta');
var uri = 'http://www.google.com';

pmd(uri, function(err, data){
  if(err){
    throw err;
  }
  console.log(data);
});
```

##Usage - CLI

To use it as a CLI app install it globally.

To display help

```
$ pagemeta --help
```

To display version

```
$ pagemeta --version
```

Usage:

```
$ pagemeta <uri>
```

##Output

```
{
  "title": "Google",
  "description": "Velkommen til Google Søk. Finn det du leter etter på nettet på et blunk.",
  "robots": "noodp"
}
```
