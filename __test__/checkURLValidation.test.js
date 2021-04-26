import { checkURLValidation } from '../src/client/js/nameChecker'

describe("Test the checkURLValidation function", () => {
	
	test("checkURLValidation func is defined", () => {
	
		expect(checkURLValidation).toBeDefined()
	})
	
	test("checkURLValidation func returns true if the entered url is valid.", () => {
	
		expect(checkURLValidation('https://classroom.udacity.com')).toBeTruthy()
		expect(checkURLValidation('https://stackabuse.com/how-to-write-express-js-middleware/')).toBeTruthy()
	})
	
	test("checkURLValidation func returns false if the entered url is invalid.", () => {
	
		expect(checkURLValidation('udacity')).toBeFalsy()
		expect(checkURLValidation('')).toBeFalsy()
	})
	
})