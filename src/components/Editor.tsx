import React, { useState, useEffect } from "react";
import { IntlProvider } from "react-intl-next";
import ButtonGroup from "@atlaskit/button/button-group";
import Button from "@atlaskit/button/standard-button";
// import LockCircleIcon from "@atlaskit/icon/glyph/lock-circle";

import {
  Editor,
  EditorContext,
  WithEditorActions,
  CollapsedEditor,
} from "@atlaskit/editor-core";

const SAVE_ACTION = (e) => {
  console.log(e.dom.innerHTML);
};
const CANCEL_ACTION = () => console.log("Cancel");
const EXPAND_ACTION = () => {};

const exampleDocument = {
  // ... (no change here)
};

const EditorCore = () => {
  const [hasJquery, setHasJquery] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    delete window.jQuery;
    loadJquery();
  }, []);

  const onFocus = () => setIsExpanded((prev) => !prev);

  if (!hasJquery) {
    return <h3>Please wait, loading jQuery ...</h3>;
  }

  return (
    <IntlProvider locale="en">
      <EditorContext>
        <div className="mt-2">
          <WithEditorActions
            render={(actions) => (
              <ButtonGroup>
                <Button>Load Document</Button>
                <Button onClick={() => actions.clear()}>Clear</Button>
              </ButtonGroup>
            )}
          />

          <div style={{ padding: "20px" }}>
            <CollapsedEditor
              placeholder="What do you want to say?"
              isExpanded={isExpanded}
              onFocus={onFocus}
              onExpand={EXPAND_ACTION}
            >
              <Editor
                appearance="comment"
                placeholder="What do you want to say?"
                shouldFocus={true}
                quickInsert={true}
                allowTextColor={true}
                allowRule={true}
                allowTables={{
                  allowControls: true,
                }}
                allowHelpDialog={true}
                onSave={SAVE_ACTION}
                onCancel={CANCEL_ACTION}
                // defaultValue={defaultValue}
              />
            </CollapsedEditor>
          </div>
        </div>
      </EditorContext>
    </IntlProvider>
  );

  function loadJquery() {
    const scriptElem = document.createElement("script");
    scriptElem.type = "text/javascript";
    scriptElem.src =
      "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";

    scriptElem.onload = () => setHasJquery(true);

    document.body.appendChild(scriptElem);
  }
};

export default EditorCore;
