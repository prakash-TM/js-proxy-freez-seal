const obj = { f_name: "Prakash", l_name: "TM", edu: "ece", age: 21 };
const handler = {
    set(target, key, value) {
        const isFrozen = Object.isFrozen(target);
        console.log({ isFrozen });
        // console.log("check1" + isFrozen)
        // console.log("check2" + !!isFrozen)
        if (isFrozen) {
            throw "It is frozen Object";
        }

        const isSealed = Object.isFrozen(target);
        console.log({ isSealed });
        if (!!isSealed) {
            throw "It is Sealed Object";
        }

        console.log("Target: ", target);
        console.log(`set value ${key} as ${value}`);
        target[key] = value;
    },
};
const p = new Proxy(obj, handler);

Object.freeze(p);

p.age = 10; // logs "Setting value age as 10"
//console.log(p.age, p);