We want to use the provided [link extension provided by TipTap](https://tiptap.dev/docs/editor/extensions/marks/link) but unfortunately it is falling short on certain edge cases for what we want to achieve.

## Case #1

When pasting a link, the extension verifies if the value is prefixed by the protocol and if it isn't it will automically append it.
(i.e pasting google.com will become https://google.com)
However, this behaviour does not happen when using the setLink command provided by them.
We want to streamline this by making the setLink command also verify and prefix the protocol.

## Case #2

We want to disable the ability to paste links into subselections of links. Making it so that if you paste a link into a subselection of a link, it will replace the whole link.

## Bonus points

- Future proofing
  Ideally we want to use the extension and use the .extends() method
- Safety
  Making sure that whenever we upgrade the packages, we won't lose our changes and that we will have resiliency to unpredictable changes from the core extension
- Reusability
  Sometimes, certain helper functions can be created / derived to be shared across any extension changes that we need to implement
