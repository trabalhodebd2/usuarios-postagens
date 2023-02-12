import { 
    verifyAutenticate 
} from "../services/authenticate/authenticate.js"

import { 
    defaultRoutePages
} from "../config.js"

const page = "index.html"

if (verifyAutenticate())
    window.location.href = defaultRoutePages + page