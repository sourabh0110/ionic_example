// These rules give anyone, even people who are not users of your app,
// read and write access to your Firebase database 
Path: Firebase->Database->Rules
{
  "rules": {
    ".read": true,
    ".write": true
  }
}