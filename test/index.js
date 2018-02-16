var DefaultMap = require('../index.js'),
    should      = require('should');

describe('DefaultMap', function() {
  describe('#get', function() {
    it('should get defined values', function() {
      var map = new DefaultMap('baz');
      map.set('foo', 'bar');
      map.get('foo').should.eql('bar');
    });
    it('should get default for undefined values', function() {
      var map = new DefaultMap([]);
      map.get('baz').should.have.length(0);
    });
    it('should not give same object on successive default values', function() {
      var map = new DefaultMap({});
      var value = map.get('foo');
      value.key = 'defined-on-foo';
      map.get('bar').should.eql({});
    });
    it('should persist changes for same key', function() {
      var map = new DefaultMap({});
      var value = map.get('foo');
      value.key = 'defined-on-foo';
      map.get('foo').should.have.property('key', 'defined-on-foo');
    });
    it('should work for numbers', function () {
      var map = new DefaultMap(0);
      map.set('apples', map.get('apples') + 1);
      map.get('apples').should.eql(1);
    });
    it('should persit changes for same key for objects', function() {
      var map = new DefaultMap({});
      map.get('potatoes')['foo'] = 'bar';
      map.get('potatoes').should.have.property('foo', 'bar');
    });
  });
  describe('#set', function() {
    it('should be able to get previous set value', function() {
      var map = new DefaultMap('default');
      map.set('foo', 'bar');
      map.get('foo').should.eql('bar');
    });
  });
});
