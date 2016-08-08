
module.exports = function (grunt) {
	grunt.file.defaultEncoding = "GBK";
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					baseUrl: 'app/src',/*相对Gruntfile.js的目录*/
					paths : {
						'zepto': '../lib/Zepto.min',
						'anchor' : 'list/anchor'
					},
					shim: {
						'zepto': {
							exports: '$'
						}
					},
					dir:'app/js',/*相对Gruntfile.js的目录  优化后的目录*/
					optimize: 'none',
					modules: [
						{
							name: 'main1',
							include: ['anchor']
						}
					],
					skipDirOptimize: true /*当设置为true时，优化器将会跳过非构建中被约束的JS文件。*/
				}
			}
		}
		
	});
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('build',['requirejs']);
};