
module.exports = function (grunt) {
	grunt.file.defaultEncoding = "utf-8";
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					appDir: 'www',
					mainConfigFile: 'www/js/common.js',
					dir: 'www-built',
					modules: [
						//First set up the common build layer.
						{
							//module names are relative to baseUrl
							name: '../common',//相对于baseUrl
							//List common dependencies here. Only need to list
							//top level dependencies, "include" will find
							//nested dependencies.
							//公共类库包含的类文件
							include: ['jquery',
									  'app/lib',
									  'app/controller/Base',
									  'app/model/Base'
							]
						},

						//Now set up a build layer for each main layer, but exclude
						//the common one. "exclude" will exclude nested
						//the nested, built dependencies from "common". Any
						//"exclude" that includes built modules should be
						//listed before the build layer that wants to exclude it.
						//The "page1" and "page2" modules are **not** the targets of
						//the optimization, because shim config is in play, and
						//shimmed dependencies need to maintain their load order.
						//In this example, common.js will hold jquery, so backbone
						//needs to be delayed from loading until common.js finishes.
						//That loading sequence is controlled in page1.html.
						{
							//module names are relative to baseUrl/paths config
							name: 'app/main1',
							exclude: ['../common']
						},

						{
							//module names are relative to baseUrl
							name: 'app/main2',
							exclude: ['../common']
						}

					]
				}
			}
		}
		
	});
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('build',['requirejs']);
};