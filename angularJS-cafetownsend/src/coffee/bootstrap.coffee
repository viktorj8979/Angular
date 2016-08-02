#
# ******************************************************************************************************
#	 AngularJS - CafeTownsend
# ******************************************************************************************************
#
#
#	 Copyright (c) 2011 Mindspace, LLC.
#	 Open source under the MIT License.
#
# ******************************************************************************************************
#

# "use strict";

head.js(

	# load files in parallel but execute them in sequence

	{ jquery     :	 "assets/js/lib/jquery.min.js"			}
	{ uuid       :	 "assets/js/lib/uuid.js"				}
	{ namespace	 :	 "assets/js/lib/namespace.min.js"	 	}
	{ angular	 :	 "assets/js/lib/angular/angular-1.0.0rc10.js"		}

	# Load entire CafeTownsend application code/engine
	# NOTE: if change path below to use CafeTownsend.min.js

	{ cafetownsend:	 "assets/js/CafeTownsend.js"		}

)

head.ready( "cafetownsend", ->

	makeEventDirective = ( ( fnName ) ->
		return ( -> return mindspace.angular.directive.EventDirectives[ fnName ] )
	)

	# Declare app-level module which depends on filters, and services
	angular
		.module( 'CafeTownsend', [ ] )
		.config( ['$routeProvider',  ($routeProvider) ->
			$routeProvider
			.when( '/login',
				template: "assets/tmpl/login.html"
				controller: mindspace.cafetownsend.controller.LoginController
			)
			.when( '/employee',
				template: "assets/tmpl/employees.html"
				controller: mindspace.cafetownsend.controller.EmployeeController
			)
			.when( '/employee/:id',
				template: "assets/tmpl/employee_edit.html"
				controller: mindspace.cafetownsend.controller.EmployeeEditController
			)
			.otherwise(
				redirectTo : '/employee'
			)
		])
		.directive('ngDblclick', makeEventDirective( "dblClick" ) )
		.directive('ngFocus',    makeEventDirective( "focus"    ) )

		.factory( "sessionService", ['$log', ($log) ->
			# Register a provider for a SessionServices; requires $log
			new mindspace.cafetownsend.service.SessionService( $log )
		])
		.factory( "employeeManager", [ '$http', '$q', '$log', ($http, $q, $log) ->
			# Register a provider for an EmployeeManager; requires $http & $log
			new mindspace.cafetownsend.service.EmployeeManager( $http, $q, $log )
		])

		.run( mindspace.cafetownsend.CafeTownsendApp )

)