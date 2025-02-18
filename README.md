# Starting

- Make sure you are in the correct npm and node versions with `nvm use`
- run `pnpm i` to install dependecies
- run `pnpm run dev` to start the application

# Exercise #1

## Issue

Currently the UX for the link extension is a bit lacking.

- When clicking on "Add Link"

  - A prompt should be shown to the user to fill in with a url
  - If the selection of text already contains a link, the text for this button should become "Change Link"
    - The prompt should be prefilled with the current url set in the link

- When selecting a part of the text a bubble menu appears
  - This menu should only appear if a link is present
  - Clicking on the "Open" button should open the url in a new tab
  - Cicking on the "Unlink" button should remove the link from the selection
  - Clicking on change should open and perform the same operation as "Change Link"

Keep in mind that only missing parts for this exercise are all related to the integration of Tiptap, and not the UI elements

- To help prompt the user, a util function called [promptUserForValue](/src/utils/promptUserForValue.ts) already exists
- To interact with the editor data, a helper hook has been created [useCurrentEditorWithHandler](/src/hooks/useCurrentEditorWithHandler/useCurrentEditorWithHandler.ts)

### Acceptance Criteria

- All the requirements above are met

# Exercise #2

We want to use the provided [link extension provided by TipTap](https://tiptap.dev/docs/editor/extensions/marks/link) but unfortunately it is falling short on certain edge cases for what we want to achieve.

## Issue

When pasting a link, the extension verifies if the value is prefixed by the defaultProtocol and if it isn't it will automically append it.
However, this behaviour does not happen when using the setLink command provided by them.
We want to streamline this by making the setLink command also verify and prefix the protocol.

### How to verify current behaviour

- Pasting the link `google.com` results in it becoming `https://google.com`

### Acceptance Criteria

- Inserting\Updating the link through the UI `google.com` results in it becoming `https://google.com`

### Last Step

- Upgrade the link extension from `^2.9.1` to `^2.11.5`, making sure that any changes that were made have no negative impact

# Guidelines

- Future proofing
  Ideally we want to use extensions provided by TipTap and make use of the `.extends()` method
- Safety
  Making sure that whenever we do upgrade the packages, we won't lose our changes and that we will have resiliency to unpredictable changes from the core extension
- Reusability
  Sometimes, certain helper functions can be created / derived to be shared across any extension changes that we need to implement
