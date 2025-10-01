const capMe = (names) => names.map(name => {
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    });