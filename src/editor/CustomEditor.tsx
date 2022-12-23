import React, {useEffect, useState} from "react";

// @ts-ignore
import CKEditor from "custom-editor/dist/ckeditor";

export default function CustomEditor() {
    const editorRef = React.useRef(null);
    const [editor, setEditor] = useState<any>(null)
    const {PocEquationInlineEditor} = CKEditor

    const initEditor = () => {
        PocEquationInlineEditor.create(editorRef.current)
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

                //Close wiris
                const wiris_close_button = document.querySelector(".wrs_modal_close_button") as HTMLLinkElement
                if (wiris_close_button) {
                    console.log(`Wiris panel is closing`)
                    wiris_close_button.click()
                }
            }
        }

    }, [editorRef.current]);


    return (
        <>
            <div ref={editorRef} className={"border"}></div>
        </>
    );
}
