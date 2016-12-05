set -e

eval "$(ssh-agent -s)"
chmod 600 .travis/deploy_key.pem
ssh-add .travis/deploy_key.pem
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git remote add deploy git@github.com:WCLDN/2017-theme.git
git add -f build/style.css build/style.css.map
git commit --message "[ci skip] Travis build: ${TRAVIS_BUILD_NUMBER}"
git fetch deploy
git checkout -b master deploy/master
git checkout $TRAVIS_BRANCH build/style.css
git checkout $TRAVIS_BRANCH images
mv build/style.css style.css
git add style.css images
git rm --cached build/style.css
rm -rf build
git commit --message "[ci skip] Travis build: ${TRAVIS_BUILD_NUMBER}"
git push deploy master
