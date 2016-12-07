# 2017-theme [![Build Status](https://travis-ci.org/WCLDN/2017-theme.svg?branch=master)](https://travis-ci.org/WCLDN/2017-theme)

WordPress theme assets for 2017.london.wordcamp.org

## IMPORTANT NOTES
- The develop branch is automatically deployed to production.
- Commits that do not edit sass will show as Travis build failures.
- All images should be postfixed with a number e.g. `logo-001.jpg` as [Photon does not support cache invalidation](https://jetpack.com/support/photon/#limitations).

## Local Development
1. Install [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV)
1. Install the [WordPress Meta Environment](https://github.com/WordPress/meta-environment)
1. Run `vagrant provision`
1. Checkout out this repo as 2017-theme in the VVV www folder
1. Run `vagrant provision`
1. Set the theme of http://2014.content.wordcamp.dev/ to `Twenty Thirteen`

## Brand Colours (used for theme)
- #A61F23
- #FFCC02
- #FFCC02
- #27211F
- #A6A8AB
- #27211F
- #FFCC02
- #A6A8AB
