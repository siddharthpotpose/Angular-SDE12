let menu;
menu = 2;
switch (menu) {
    case 1:
        console.log("veg menu")

        let veg = 5;
        switch (veg) {
            case 1:
                console.log("panner tikka")
                break;

            case 2:
                console.log("panner 65")
                break;

            case 3:
                console.log("chilly panner")
                break;

            default:
                console.log("not available")
                break;
        }
        break;
    // ------------------------------------------------------------------------

    case 2:
        console.log("non-veg menu")
        let non = 3;
        switch (non) {
            case 1:
                console.log("chilly chicken")
                break;

            case 2:
                console.log("chicken 65")
                break;

            case 3:
                console.log("chicken tandoori")
                break;

            default:
                console.log("not available")
                break;
        }
        break;

    default:
        break;
}