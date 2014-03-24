// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


  function aceify(){
        console.log('aceify!');
        var editor = ace.edit("content_ace");
        var textarea = $('#content_textarea').hide();
        editor.getSession().setValue(textarea.val());
        editor.getSession().on('change', function(){
            textarea.val(editor.getSession().getValue());
        });
        editor.setTheme('ace/theme/chaos');
        editor.getSession().setMode('ace/mode/markdown');
        editor.setFontSize( 15 );
        editor.setShowPrintMargin( false );
        editor.getSession().setUseSoftTabs( true );
        editor.getSession().setUserWrapmode( true );
    
    
       this.ace = ace.edit( "editor" );    
       this.ace.setShowPrintMargin( false );
       this.ace.setReadOnly( false );
       this.ace.getSession().setUseWrapMode(true);
       this.ace.getSession().setUseSoftTabs(true);       
       this.ace.setOptions({
         enableBasicAutocompletion: true //,
        // enableSnippets: true
       });
  }
  $(document).ready( aceify );
  $(document).on('page:load', aceify);

