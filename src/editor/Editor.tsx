import React, {useEffect, useState} from "react";

// @ts-ignore
import CKEditor from "custom-editor/dist/ckeditor";

export default function Editor() {
    const editorRef = React.useRef(null);
    const [editor, setEditor] = useState<any>(null)
    const {InlineEditor} = CKEditor

    const initEditor = () => {
        InlineEditor.create(editorRef.current)
            .then((editor: any) => {
                setEditor(editor)

            })
            .catch(console.error);
    }
    useEffect(() => {
        // @ts-ignore
        if (editorRef.current && !editor) {
            initEditor()
        }

        return ()=>{
            if(editor){
                editor.destroy()
            }
        }

    }, [editorRef.current]);


    return (
        <>
            <div ref={editorRef} className={"border"}></div>
        </>
    );
}
