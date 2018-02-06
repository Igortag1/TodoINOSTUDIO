// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBKiauZ8-BrJnuFhCxEkSvqI_rEYc7_pwE',
    authDomain: 'todoinolist.firebaseapp.com',
    databaseURL: 'https://todoinolist.firebaseio.com',
    projectId: 'todoinolist',
    storageBucket: 'todoinolist.appspot.com',
    messagingSenderId: '485316046629'
  }
};
