# CafeTownsend - AngularJS

<br/>
This project is an HTML5/Javascript implementation of the infamous CafeTownsend application. CafeTownsend is a well known application created to demonstrate various MVC frameworks using Flex or ActionScript. There are known ports using Cairngorm, Mate, PureMVC, Spring ActionScript, RobotLegs and Swiz. 

This project contributes a superior port of the HTML5 CafeTownsend application;using the [Angular.js IoC](http://angularjs.org/) framework.

---

AngularJS is an amazing IoC MVVM framework for Javascript applications. Supporting pageless architectures, advanced data binding, HTML templating, and dependency injection… AngularJS is strikingly similar to the Flex [Swiz IoC framework](http://swizframework.org/).


Note: Subsequent CSS version will be rewritten in [{Less}](http://lesscss.org/) for dynamic stylesheet language support. <br/>
The AngularJS port also demonstrates significant advantages over the SpineJS implementation:

*  Pageless Architecture
*  Improved routing with `deep link` support
*  Significant reduction in HTML template fragments
*  Rigorous elimination of Javascript code from HTML 
*  Inter-controller data sharing
*  Session Management/Authentication
*  Lazy loading of data services (*with auto-jsonify of external JSON data*)
*  Code versions handwritten in both Javascript and Coffeescript 
*  Demonstrates `separation-of-concerns` for Model-Views-Controllers
*  Demonstates `dependency injection` for services and Controllers
*  Demonstrates best practices for `Model-View-View-Model (MVVM)` architectures
*  Uses [CoffeeScript](http://coffeescript.org/) files for services and controller classes



## Directory Layout

    app/                  --> all of the files to be used in production

      CafeTownsend.html   --> application file (the main html template file of the app)

	    assets/

        css/              --> css files
          styles.css      --> default stylesheet

        images/           --> image files

        tmpl/         --> angular view partials (partial html templates)
          login.html
          employees.html
          employee_edit.html

        data/
          members.json      --> external, simple JSON data
        
        js/
          CafeTownsend.js --> application source code
          bootstrap.js    --> asynch loader and initializer (using head.js)

          lib/
            /angular
                angular.js      --> AngularJS v0.10.5 IoC Framework
            
            jquery.min.js       --> jQuery v1.7 minified
            head.load.min.js    --> asynch script loader
            namespace.min.js    --> namespace support for `package` class organization
            uuid.js             --> uuid generator
    src/      
      Cakefile              --> cake build script
      
      coffee/			          --> master developer files for service & controller classe		
        bootstrap.coffee  	--> asynch loader and initializer (using head.js)

		    mindspace/cafetownsend/	
            CafeTownsendApp.coffee --> application class to establish routes and session

      			controller/			
      				SessionController.coffee
      				LoginController.coffee
      				EmployeeController.coffee
      				EmployeeEditController.coffee

      			service/
      				EmployeeManager.coffee
      				SessionService.coffee

      	  	com/mindspace/angular/
        			directive/			
        				EventDirectives.coffee   --> doubleClick, focuse directives
	
    scripts/              --> handy shell/js/ruby scripts
      web-server.js       --> simple development webserver based on node.js


## Build Notes


Developers should use the cake script to build, consolidate, and minify the custom Javascript into Cafetownsend.min.js

    cd ./src; cake build;

*  CafeTownsend.js - consolidate application code
*  bootstrap.js    - asynch loader and initializer (using head.js)

## Pending Features

This effort is still ongoing with some in-progress effort that will provide the following features:

*  Provide `loading indicator` as data load indicator
*  Support deep linking with synch data loads
*  Convert disorganized CSS to LESS
*  Build CafeTownsend Tests/Scenarios
*  Create view slide transitions 

