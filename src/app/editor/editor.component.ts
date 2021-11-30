import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editorForm:FormGroup;
  someContent='<h1 style="text-align: center">Quill Rich Text Editor</h1>' +
    '<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="https://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="https://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p><p>\n</p>' +

    '<iframe class="ql-video ql-align-center" frameborder="0" allowfullscreen="true" width="500" height="250" src="https://player.vimeo.com/video/253905163"></iframe>' +

    '<p>\n</p><p>\n</p><h3 style="text-align: center">Getting Started is Easy</h3>' +
    '<pre>// &lt;link href="https://cdn.quilljs.com/1.2.6/quill.snow.css" rel="stylesheet"&gt;\n' +
    '// &lt;script src="https://cdn.quilljs.com/1.2.6/quill.min.js"&gt;&lt;/script&gt;\n' +
    '\n' +
    'var quill = new Quill(\'#editor\', {\n' +
    '  modules: {\n' +
    '    toolbar: \'#toolbar\'\n' +
    '  },\n' +
    '  theme: \'snow\'\n' +
    '});</pre>';

  constructor() { }

  ngOnInit(): void {
    this.editorForm=new FormGroup({
      'editor': new FormControl(null)
    })
  }

}
