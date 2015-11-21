const options = {
    errorHandler: error => {
        throw error;
    }
};

function config(newOptions) {
    for (let key in options) {
        setOption(options, newOptions, key);
    }
}

function setOption(options, newOptions, field) {
    options[field] = newOptions[field] || options[field];
}

export { options, config };
