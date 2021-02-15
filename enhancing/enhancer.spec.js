const enhancer = require('./enhancer.js');
// test away!


describe("enhancements test", () => {

    test("repair", () => {
        let item = {
            name: "name",
            enhancement: 10,
            durability: 10,
        }
        const newItem = enhancer.repair(item);
        expect(newItem.durability).toBe(100);
    })


    test("success item enhancement", () => {
        const item ={
            name:"name",
            enhancement: 12,
            durability: 42
        }
        const newItem = enhancer.success(item)
        expect(newItem.enhancement).toBe(13)
    })

    test("fail item enhancement", () => {
        const item = {
            name:"name",
            enhancement: 111,
            durability: 15
        }
        const newItem = enhancer.fail(item)
        expect(newItem.durability).toBe(10)
    })


})