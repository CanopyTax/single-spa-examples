import * as singleSpa from 'single-spa';
import {loadEmberApp} from 'single-spa-ember';

singleSpa.declareChildApplication('navbar', () => SystemJS.import('/build/navbar.app.js'), () => true);
singleSpa.declareChildApplication('home', () => SystemJS.import('/build/home.app.js'), () => location.hash === "" || location.hash === "#");
singleSpa.declareChildApplication('angular1', () => SystemJS.import('/build/angular1.app.js'), hashPrefix('/angular1'));
singleSpa.declareChildApplication('react', () => SystemJS.import('/build/react.app.js'), hashPrefix('/react'));
singleSpa.declareChildApplication('angular2', () => SystemJS.import('/build/angular2.app.js'), hashPrefix('/angular2'));
singleSpa.declareChildApplication('vue', () => SystemJS.import('/build/vue.app.js'), hashPrefix('/vue'));
singleSpa.declareChildApplication('svelte', () => SystemJS.import('/build/svelte.app.js'), hashPrefix('/svelte'));
singleSpa.declareChildApplication('preact', () => SystemJS.import('/build/preact.app.js'), hashPrefix('/preact'));
singleSpa.declareChildApplication('iframe-vanilla-js', () => SystemJS.import('/build/vanilla.app.js'), hashPrefix('/vanilla'));
singleSpa.declareChildApplication('inferno', () => SystemJS.import('/build/inferno.app.js'), hashPrefix('/inferno'));
singleSpa.declareChildApplication('ember', () => loadEmberApp("ember-app", '/build/ember-app/assets/ember-app.js', '/build/ember-app/assets/vendor.js'), hashPrefix('/ember'));

singleSpa.start();

function hashPrefix(prefix) {
    return function(location) {
        return location.hash.indexOf(`#${prefix}`) === 0;
    }
}
