import { useState } from "react";

export default function useFocus(number, focusIndex) {
    let variantFill = [...Array(number).fill("outlined")];
    variantFill[focusIndex] = "contained";
    // console.log("variantfull", variantFill);
    const [variant, setVariant] = useState([...variantFill]);
    // console.log("variant in useFocus: ", variant);

    const handleButtonFocus = (i) => {
        let index = variant.findIndex((value) => value === "contained");
        if (i !== index) {
            let newVariant = [...variant];
            newVariant[index] = "outlined";
            newVariant[i] = "contained";
            setVariant(newVariant);
        }
    };

    return [variant, handleButtonFocus];
}
