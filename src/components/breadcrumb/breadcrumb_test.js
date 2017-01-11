import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './breadcrumb';

const assert = chai.assert;

// ViewModel unit tests
describe('account-health-tracker/breadcrumb', function account-health-tracker/breadcrumbVMTests() {
  it('Has message', function test() {
    const vm = new ViewModel();
    assert.equal(vm.message, 'This is the breadcrumb-ui component');
  });
});
