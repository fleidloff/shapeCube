import {types} from "./types";
import {options} from "./options";

function check(...params) {
    params.forEach(param => {
        for (let key in param) {
            if (typeof types[key] !== "function") {
                if (key !== "message") {
                    throw new Error(`type ${key} is not defined`)
                }
                return;
            }
            const defaultMessage = types[key](param[key]);
            if (defaultMessage !== true) {
                const e = new TypeError(param.message || defaultMessage);
                options.errorHandler(e);
            }
        };
    });
}

export {check}
