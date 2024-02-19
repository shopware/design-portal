---
title: Get involved
sidebar: true
aside: true
page: true
editLink: false
stackOverflowLink: false
prev: true
next: true
swag:
  related: false
---

# {{ $frontmatter.title }} 

<div class="Tabs_Design--custom">
<Tabs>
  <Tab title="For developers" id="developers" icon="github">
  <div class="mt-[20px] mb-[20px]">
  Thank you for taking a interest in making Meteor a better project! 💙

To contribute code _(features or bug fixes)_ open up a pull request.
In case you want to make a larger change to the code base, open up
an issue first before writing any code. That way you don't lose your
valuable time in case we might reject the pull request.

Meteor is available under [MIT license](/get-started/license).
Contribute your code under MIT license.

If you've never contributed to a open source project you might
find the [this guide](https://opensource.guide/how-to-contribute/) helpful.

## Code of conduct

To understand which action we tolerate we expect you to read
our [code of conduct](https://github.com/shopware/meteor/tree/main/CONTRIBUTING.md).

## Bugs

Please take a look at the [existing issues](https://github.com/shopware/meteor/issues)
before creating a new one. That way keep the number of duplicate issues low.
Complete the issue template as much as possible when creating a new issue.

To get your bug fixed faster, add a link to a 
[project with the bug](https://stackblitz.com/edit/vitejs-vite-emem8b?file=index.html&terminal=dev)
for us to reproduce in the issue's description.

## Feature Requests

Search trough the [list of existing feature requests](https://github.com/shopware/meteor/issues),
before you create a issue. If somebody already requested your feature you
can up-vote that issue. This helps us to see what the community wants the most.

If there does not already exist a feature request for your idea,
you can [request a feature](https://github.com/shopware/meteor/issues/new).

## Creating a pull request

The first step is to clone your repo. Then, install the dependencies with:

```sh
pnpm install
```

In case you have not installed pnpm execute `npm install -g pnpm`.
If you want to install pnpm through another way take a look at their documentation.

To execute scripts defined in the packages.json file of each package you have three options:

1. Or you use turbo: `npx turbo run <TASK_NAME>`
2. You run the script from the root with `pnpm --filter <PACKAGE_NAME> run <SCRIPT_NAME>`
3. You cd into the package directory and run the script 

You can find the available turbo tasks in the turbo.json file

Don't know turborepo? Check out [their documentation](https://turbo.build/repo/docs).

Make sure to follow these steps before you push your branch:

1. You linted your code with `pnpm run lint:eslint`
2. There are no type errors, run `pnpm run lint:types`
3. Run `pnpm run test:unit` to see if all tests pass
4. You generated a changeset with `npx changeset`

After completing all the tests you can submit your pull request.

### Create a changelog

We create and manage our changelogs with changesets. Follow these steps
to create a changelog:

1. Run `npx changesets`
2. Select the packages you updated
3. Define your version bump for each package
4. Write a meaningful changelog message

Feel free to check out the [changesets documentation](https://github.com/changesets/changesets?tab=readme-ov-file#documentation)
for more information on how to work with it.

## Managing releases

When your pull request gets merged a GitHub Action looks at your changes. If it finds a changeset in there it will copy that changeset over to a release branch.

If you decide to release a new version, merge the release branch. Changesets will now take over. It updates the changelog files, bumps up the version numbers and it publishes the packages to npm.

That's it there is nothing more you have to do.
</div>
  </Tab>
</Tabs>
</div>