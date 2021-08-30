import React from "react";
import {Controlled as CodeMirror} from 'react-codemirror2'
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/xml/xml";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const Editor = (props) => {
    return(
        <CodeMirror
            value={props.value}
            options={{
                mode: props.mode,
                theme: 'material',
                lineNumbers: true
            }}
            onBeforeChange={props.onChange}
        />
    )
}

export default Editor