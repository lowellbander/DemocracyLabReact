const MainController = require("./MainController")
// @ponicode
describe("_onChangeSection", () => {
    let inst

    beforeEach(() => {
        inst = new MainController.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst._onChangeSection({})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._onChangeSection(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
