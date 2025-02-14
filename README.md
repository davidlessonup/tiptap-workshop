# Starting

- Make sure you are in the correct npm and node versions with `nvm use`
- run `pnpm i` to install dependecies
- run `pnpm run dev` to start the application

# Exercise #1

Currently the UX for the link extension is a bit lacking.

## Issue

When a link is present:

- The button should be highlighted and the text in it should change
- The alert should show the current value of the link

### How to verify current behaviour

### Acceptance Criteira

# Exercise #2

We want to use the provided [link extension provided by TipTap](https://tiptap.dev/docs/editor/extensions/marks/link) but unfortunately it is falling short on certain edge cases for what we want to achieve.

## Issue

When pasting a link, the extension verifies if the value is prefixed by the defaultProtocol and if it isn't it will automically append it.
However, this behaviour does not happen when using the setLink command provided by them.
We want to streamline this by making the setLink command also verify and prefix the protocol.

### How to verify current behaviour

- Pasting the link `google.com` results in it becoming `https://google.com`

### Acceptance Criteira

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
