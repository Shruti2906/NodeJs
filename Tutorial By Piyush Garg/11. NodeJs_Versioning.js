
/*
 knowing versioning is importanat from security point of view 

 official site of npm-> npmjs.com

 in package.json file, 
    "version": "4.18.2"

    1st part -> 4
    2nd part -> 18
    3rd part -> 2

    3rd part:
        minor fixes and its an optional update.
        eg. some typo is fixed.

    2nd part:
        recommended Bug Fix(Security Fix)
        -some issue is fixed or some feature is added.
        Latest -> 4.19.0

    3rd part:
        Major release
        -Major and Breaking Update.
        updating existing app to latest major version could cause -> all functionalities of current project might or might not run properly.!!
        -recommended to use only for building new application from scratch and after watching changing log in its documentation.(https://expressjs.com/en/4x/api.html)
        Latest -> 5.0.0

"express": "^4.18.2"
    Caret Symbol (^) indicates never change.
        So, here it means never change 4. 
        (so, npm install express etc won't change 4 i.e 1st part of version.
          other 2 parts can be changed.
        )
        Means, you can update your express version from 4.18.0 till < 5.0.0
            cannot got to 5.0.0 and beyond that.

        -this locks 1st parts.
        which means 1st part of the version cannot be updated, other parts can be changed..

"express": "4.18.2"
        -this locks all parts.
        which means no part of the version can be updated.

"express": "~4.18.2"
        -locks 1st & 2nd part.
        which means only 3rd part i.e minor change, can be updated.

diffrent patterns are ther like-
        4.2.0 - 4.9.9
                -you can update from 4.2.0 to 4.9.9


                
 */