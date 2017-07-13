'use strict';

tinymce.PluginManager.add('accordion', function(editor) {
  editor.addButton('accordion', {
    text: 'Accordion',
    icon: false,
    onclick: function onclick() {
      editor.windowManager.open({
        title: 'Accordion Picker',
        body: {
          type: 'textbox',
          name: 'my_textbox',
          layout: 'flow',
          label: '# of accordions'
        },
        onsubmit: function onsubmit(e) {
          var accordionSet = [];
          var curAccordion = Date.now();
          var accordionCount = parseInt(e.data.my_textbox);
          for (var i = 0; i < accordionCount; i++) {
            var panel = '\n                    <div class="panel panel-default">\n                      <div class="panel-heading mceNonEditable productAccordion" role="tab" id="heading' + (curAccordion + i) + '">\n                        <h4 class="panel-title">\n                          <a role="button" data-toggle="collapse" class="mceEditable collapsed" data-parent="#accordion' + curAccordion + '" href="#collapse' + (curAccordion + i) + '" aria-expanded="true" aria-controls="collapse' + (curAccordion + i) + '">\n                            Change this header!\n                          </a>\n                        </h4>\n                      </div>\n                      <div id="collapse' + (curAccordion + i) + '" class="panel-collapse collapse mceNonEditable" role="tabpanel" aria-labelledby="heading' + (curAccordion + i) + '">\n                        <div class="panel-body mceEditable">\n                          <p>Change this content</p>\n                        </div>\n                      </div>\n                    </div>\n                ';
            accordionSet.push(panel);
          }

          var accordion = '\n                    <div class="panel-group" id="accordion' + curAccordion + '" role="tablist" aria-multiselectable="true">\n                      ' + accordionSet.join('') + '\n                  </div>';
          editor.insertContent(accordion);
        }
      });
    }
  });
});
