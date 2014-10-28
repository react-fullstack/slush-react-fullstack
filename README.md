#ReactJS-Fullstack Generator
>Slush generator for ReactJS - lets you quickly set up a project with sensible defaults and best practices.

##Getting Started
Install `slush generator`
```
npm install -g slush
```
Install `gulp`
```
npm install -g gulp
```
Make a new directory, and `cd` into it
```
mkdir my-new-project && cd my-new-project
```
Install `react-fullstack generator`
```
npm install -g slush-react-fullstack
```
Generate your full app template
```
slush react-fullstack
```

Run `gulp` to preview on local host, don't forget to spin up an instance of mongo when doing so!

##Sub-generators##

  * react-fullstack:crud-app
  * react-fullstack:react-component
  * react-fullstack:react-constants
  * react-fullstack:react-actions
  * react-fullstack:react-dispatcher
  * react-fullstack:react-store

To install a sub-generator, pick one from the above list:
 ```
 slush react-fullstack:generator_of_your_choice
 ```

**Note: Generators are to be run from the root directory of your app.**

##Testing
Running `gulp jest` will run the unit tests with jest.

##Contributing
See the contributing docs: CONTRIBUTING.md for instructions.

When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.
When submitting a new feature, add tests that cover the feature.

## Changelog

Recent changes can be viewed on Github.

## License
[BSD license](http://opensource.org/licenses/bsd-license.php)
