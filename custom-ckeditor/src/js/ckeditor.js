import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic, Strikethrough, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';

import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import { FontColor, FontSize } from '@ckeditor/ckeditor5-font';
import { ImageInsert, ImageResizeButtons, ImageResizeEditing, ImageResizeHandles } from '@ckeditor/ckeditor5-image';

import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import { LinkImage } from '@ckeditor/ckeditor5-link';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import { TableCaption, TableCellProperties, TableProperties } from '@ckeditor/ckeditor5-table';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import RestrictedEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode';

import MathType from '@wiris/mathtype-ckeditor5';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

import '../scss/style.scss';
import mathConfig from './constant/mathConfig';

import { PreventTyping } from './includes/custom_typing_plugin';

// const extraPlugins = [ AllowClassesPlugin ];

const plugin = [ Essentials,
    Paragraph, PasteFromOffice, RemoveFormat, Bold, Italic, Strikethrough, Subscript, Superscript,
    FontSize, FontColor,
    Link,
    Table, TableToolbar, TableCaption, TableProperties, TableCellProperties,
    Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageInsert, ImageResizeEditing, ImageResizeButtons, ImageResizeHandles, LinkImage, MediaEmbed,
    // UploadAdapter, SimpleUploadAdapter,
    List,
    Alignment,
    MathType,
    WordCount
    // RestrictedEditingMode
    // StandardEditingMode
];

const equationPlugin = [Essentials,
    Paragraph,
    PreventTyping,
    MathType,
    RestrictedEditingMode
    // StandardEditingMode
];


const config = {
    toolbar: [
        'MathType', 'ChemType'
    ],
};

const pocEquationConfig = {
    toolbar: [
        'MathType', 'ChemType'
    ],
    restrictedEditing: {
        allowedCommands: [ 'MathType', 'ChemType' ],
        allowedAttributes: [ 'MathType', 'ChemType' ]
    },
    mathTypeParameters: {
        editorParameters: {...mathConfig.mathConfig}
    }
};


// Plugins to include in the build.
InlineEditor.builtinPlugins = plugin;

// Editor configuration.
InlineEditor.defaultConfig = {...config,toolbar:config.toolbar.filter(item=>item!=='ChemType'),
    mathTypeParameters: {
        editorParameters: mathConfig.mathConfig
    }};
class PocEquationInlineEditor extends InlineEditor{};
PocEquationInlineEditor.builtinPlugins = equationPlugin;
PocEquationInlineEditor.defaultConfig = {...pocEquationConfig,toolbar:pocEquationConfig.toolbar.filter(item=>item!=='ChemType')};

export default {
    InlineEditor,
    PocEquationInlineEditor
};
