var expect = require('expect');
import Main from 'components/Main.jsx';

// describe just breaks the tests in groups
describe('Main', () => {
    it('should properly run tests', () =>{
        expect(1).toBe(1);
    });
    it('should exist', () => {
        expect(Main).toExist();
    });
});
