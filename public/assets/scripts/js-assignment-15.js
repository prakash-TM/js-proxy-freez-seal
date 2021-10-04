const obj = { f_name: "Prakash", l_name: "TM", edu: "ece", age: 21 };
const handler = {
    set(target, key, value) {
        const isFrozen = Object.isFrozen(target);
        console.log({ isFrozen });
        // console.log("check1" + isFrozen)
        // console.log("check2" + !!isFrozen)
        if (isFrozen) {
            throw "This is frozen Object";
        }

        const isSealed = Object.isFrozen(target);
        console.log({ isSealed });
        if (!!isSealed) {
            throw "This is Sealed Object";
        }

        console.log("@AJ Target:: ", target);
        console.log(`Setting value ${key} as ${value}`);
        target[key] = value;
    },
};
const p = new Proxy(obj, handler);

Object.freeze(p);

p.age = 10; // logs "Setting value age as 10"
//console.log(p.age, p);