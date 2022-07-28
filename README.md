# Typedoc bug

This repository demonstrates a Typedoc regression introduced with v0.23:

JSDoc typedefs with descriptions of each property will get documented, but the descriptions are missing.

After

    npm install

run

    npm run doc
    open doc/interfaces/Options.html

and see the Options interface without the property descriptions.

To see the expected result, run

    npm install typedoc@0.22.18
    npm run doc
    open doc/interfaces/Options.html

All properties of the Options interface have their descriptions.