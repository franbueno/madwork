# Madwork

*By [@Fran__Good](https://twitter.com/Fran__Good)*


## Demo

View the app [Madwork](http://www.franciscobueno.com/madwork/#/).


## Application

* **Interface:** [Twitter Bootstrap](http://twitter.github.com/bootstrap/) v3.3.7

* **Engine:** [AngularJS](http://angularjs.org/) v1.5.8 ( [Guide](http://docs.angularjs.org/guide/) )

* **Features:** Displays the books available in the `books.json`


## Install Madwork

Enter the following commands in the terminal.

```bash
$ git clone https://github.com/franbueno/madwork.git
$ cd madwork/
$ npm install
```
> pre install will execute `tools/scripts/setup.js`, that will check and install node global packages [`gulp`, `bower`]
> if you are running on unix/mac machine, please run `sudo npm install`

### Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.12)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [gulp](https://github.com/gulpjs/gulp) node package installed globally.  `[sudo] npm install -g gulp`

* Must have [Bower](https://github.com/bower/bower) node package installed globally.  `[sudo] npm install -g bower`


### Gulp commands

> If you want to know more about Gulp usage in this project, check [[GitHub] soudev / gulp-steps](https://github.com/soudev/gulp-steps). This project is based on step [04](https://github.com/soudev/gulp-steps/tree/master/04).

* `gulp` - development mode, prepare files, watch changes and start server on port 1337

* `gulp --preview` - generate deploy version (`gulp --release`) on `dist` directory and start server on port 1337 looking to this directory