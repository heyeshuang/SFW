"use strict"
module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    
    # Metadata.
    pkg: grunt.file.readJSON("SFW.jquery.json")
    banner:'''
// Copyright (c) <%= grunt.template.today('yyyy') %>, <%= pkg.author.name %>. (MIT Licensed)
// ==UserScript==
// @name          <%= pkg.name %>
// @namespace     <%= pkg.homepage %>
// @version       <%= pkg.version %>
// @description   <%= pkg.description %>
// @include       <%= pkg.include %>
// ==/UserScript==
if (window.top != window.self) return;  //don't run on frames or iframes

          '''

    # Task configuration.
    clean:
      files: ["dist"]
    
    coffee:
      compile:
        files:
          'js/<%= pkg.name %>.js': 'src/*.coffee'

    concat:
      options:
        banner: "<%= banner %>"
        stripBanners: true

      dist:
        # CAUTION: load order
        src: ["libs/jquery.js","libs/jquery.*.js" , "js/<%= pkg.name %>.js"]
        dest: "dist/<%= pkg.name %>.user.js"

    # uglify:
      # options:
        # banner: "<%= banner %>"
      
      # dist:
        # src: "<%= concat.dist.dest %>"
        # dest: "dist/<%= pkg.name %>.min.js"

    watch:
      src:
        files: "src/*.coffee"
        tasks: ["clean", "coffee", "concat"]

  
  # These plugins provide necessary tasks.
  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-contrib-watch"
  
  # Default task.
  grunt.registerTask "default", ["clean", "coffee", "concat"]
