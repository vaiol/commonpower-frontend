myApp.controller('help', ['$scope', function($scope) {
	var editor = new Quill('#editor-container', {
        modules: {
          'toolbar': { container: '#toolbar-container' },
          'link-tooltip': true,
          'image-tooltip': true
        },
        theme: 'snow'
      });

      function editorTextToHTML()
      {
          document.getElementById("editor-html-text").value  = editor.getHTML()
          document.getElementById("editor-html-view").innerHTML = editor.getHTML()
      }
      editor.on('text-change', function(delta, source) {
          if (source === 'user') {
              editorTextToHTML()
          }
      });

}]);