## Home page
http://www.cerberussolutions.se

#### Dependencies
- jQuery (TemplateEditor)
- jQuery UI (TemplateEditor)
- Custom lodash build
- AngularJS

## How to Get Started

Download and install [NodeJS](http://nodejs.org/)

    $ npm install -g grunt-cli                                      		// Install Grunt globally
    $ git clone ...  								// Clone the project and enter directory
    $ cd angular-template-engine
    $ npm install                                                   		// Install dependencies
    $ grunt                                                         		// Run the default task

## Build targets
    grunt build             // Pre-cleaning and compilation of js, sass and templates
    grunt release-build     // Same as build + minification and obfuscation
    grunt default           // Runs build target and hosts a webserver with live reload
    grunt release           // Runs build target and hosts a webserver
    grunt eslint            // Runs linting
    grunt test              // Run unit/e2e tests

